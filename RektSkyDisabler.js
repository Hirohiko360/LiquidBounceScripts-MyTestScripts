/// api_version=2
var script = registerScript({
    name: "RektSkyDisabler",
    version: "1.0",
    authors: ["Mistercoolertyper", "RektSky Devs"]
});

var C03PacketPlayer = Java.type('net.minecraft.network.play.client.C03PacketPlayer')
var S40PacketDisconnect = Java.type('net.minecraft.network.play.server.S40PacketDisconnect')
var MovementUtils = Java.type('net.ccbluex.liquidbounce.utils.MovementUtils')
var AxisAlignedBB = Java.type('net.minecraft.util.AxisAlignedBB')
var RotationUtils = Java.type('net.ccbluex.liquidbounce.utils.RotationUtils')
var EntityUtil = Java.type('net.ccbluex.liquidbounce.utils.EntityUtils')
var Entity = Java.type('net.minecraft.entity.Entity')
var EntityLivingBase = Java.type('net.minecraft.entity.EntityLivingBase')
var EntityArmorStand = Java.type('net.minecraft.entity.item.EntityArmorStand')
var EntityBoat = Java.type('net.minecraft.entity.item.EntityBoat')
var LiquidBounce = Java.type('net.ccbluex.liquidbounce.LiquidBounce')

script.registerModule({
    name: "BoatDisabler",
    description: "Trolling",
    category: "Movement",
    settings: {}
}, function(module) {
    var thing

    module.on("update", function() {
        if (mc.thePlayer.ridingEntity != null) {
            mc.thePlayer.rotationPitch = 90
            mc.thePlayer.swingItem();
            mc.playerController.attackEntity(mc.thePlayer, mc.thePlayer.ridingEntity);
            mc.thePlayer.swingItem();
            mc.playerController.attackEntity(mc.thePlayer, getnearestboat());
            module.on("packet", function(event) {
                if (mc.thePlayer.ridingEntity != null) {
                    thing = true
                }
                if (thing == true) {
                    if (event.getPacket() instanceof C03PacketPlayer) {
                        event.getPacket().onGround = false
                    }
                }
            });
        }
    });

    module.on("world", function(event) {
        thing = false
    });

    module.on("enable", function() {
        Chat.print("Place 2 Boats Next To Eachother And Right Click To Use It!")
    });

    module.on("disable", function() {
        thing = false
    });
})

function magnitude(x,y,z, x2,y2,z2) {
    var x = (x - x2) * (x - x2)
    var y = (y - y2) * (y - y2)
    var z = (z - z2) * (z - z2)
    var mag = Math.sqrt(x+y+z)
    if (mag < 0 ) {mag = -mag}
    return mag
}

function getnearestboat() {
    var entitylist = mc.theWorld.getLoadedEntityList()
    for (var i in entitylist) {
        var entity = entitylist[i];
        if (entity instanceof EntityBoat) {
            if (entity != mc.thePlayer.ridingEntity) {
                return entity
            }
        }
    }
}