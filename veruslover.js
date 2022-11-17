/// api_version=2
var script = registerScript({
  name: "Verus Fucker",
  version: "1.0.0",
  authors: ["Dort"]
});

/// Packets ///
var S08PacketPlayerPosLook = Java.type("net.minecraft.network.play.server.S08PacketPlayerPosLook");
var C03PacketPlayer = Java.type("net.minecraft.network.play.client.C03PacketPlayer");
var C06PacketPlayerPosLook = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook');
var C04PacketPlayerPosition = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition")
var C0FPacketConfirmTransaction = Java.type("net.minecraft.network.play.client.C0FPacketConfirmTransaction")
var C0CPacketInput = Java.type("net.minecraft.network.play.client.C0CPacketInput")
/// Other ///
var LinkedList = Java.type("java.util.LinkedList");
var packetQueue = new LinkedList();
/// Functions ///
function sendPacketSilent(packetIn) {
  // Reason for the null params being passed through is due to the other sendPacket method triggering PacketEvent,
  // which will result in an infinite loop if called from a PacketEvent listener
  mc.thePlayer.sendQueue.getNetworkManager().sendPacket(packetIn, null, null);
}
/// Module ////
script.registerModule({
  name: "Disabler",
  category: "Fun",
  tag: "Verus",
  description: "verusn't"
}, function (module) {
    module.on("packet", function(event) {
    // Clear the queue on rejoin/world change so funky shit doesn't happen...
    if (mc.thePlayer != null && mc.thePlayer.ticksExisted == 0)
        packetQueue.clear();
    var packet = event.getPacket();
    if (packet instanceof C03PacketPlayer) {
        // Set position to a valid block height (so Spoof NoFall works)
        var yPos = Math.round(mc.thePlayer.posY / 0.015625) * 0.015625;
        mc.thePlayer.setPosition(mc.thePlayer.posX, yPos, mc.thePlayer.posZ);
        if (mc.thePlayer.ticksExisted % 45 == 0) {
            // Clip into ground and silently accept the teleport from the server. (This fucks with teleport compensation LOL)
            sendPacketSilent(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, true));
            sendPacketSilent(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY - 11.725, mc.thePlayer.posZ, false));
            sendPacketSilent(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, true));
        }
    } else if (packet instanceof S08PacketPlayerPosLook) {
      var x = packet.getX() - mc.thePlayer.posX;
      var y = packet.getY() - mc.thePlayer.posY;
      var z = packet.getZ() - mc.thePlayer.posZ;
      var diff = Math.sqrt(x * x + y * y + z * z);
      // Cancel the teleport, and silently accept it.
      if (diff <= 8) {
        event.cancelEvent();
        //LATEST verus ALWAYS expects a c06 within 30 seconds of a teleport if packets have been sent from the client after the teleport.
        sendPacketSilent(new C06PacketPlayerPosLook(packet.getX(), packet.getY(), packet.getZ(), packet.getYaw(), packet.getPitch(), true));
      }
    } else if (packet instanceof C0FPacketConfirmTransaction) {
      for (var i = 0; i < 4; i++) {
        // Make sure to dupe packets 4 times, since it will match up with the missing packets while keeping the anticheat disabled, in order to bypass ping spoof checks
        // why the fuck do they not checked duped transactions? LMFAO
        packetQueue.add(packet);
      }
    event.cancelEvent();
}
  });
  module.on("update", function() {
    // Partially drain the queue every 180 ticks (9 seconds), to prevent flagging Ping Spoof.
    if (mc.thePlayer.ticksExisted % 180 == 0) {
      // grab packets untill the queue size is 22 or less.
      while (packetQueue.size() > 22) {
        // grab 1 packet, send and then remove it from the queue
        sendPacketSilent(packetQueue.poll());
      }
    }
  });
});
