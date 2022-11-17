///api_version=2
var System = Java.type('java.lang.System');
var Fonts = Java.type("net.ccbluex.liquidbounce.ui.font.Fonts");
var timeSince = System.currentTimeMillis();

(script = registerScript({
    name: "LastPacket",
    authors: ["PlumerMan"],
    version: "1.0"
})).import("Core.lib");

module = {
    category: "Exploit",
    description: "Time since last packet received",
    onPacket: function (e) {
        var packetName = e.packet.toString();
        if(packetName.charAt(34) == "S")
            timeSince = System.currentTimeMillis();
    },
    onRender2D: function () {
		Fonts.minecraftFont.drawStringWithShadow("§7Last Packet (MS): §f" + (System.currentTimeMillis() - timeSince),  4, 10, 0xFFFFFF); // Bottom Left
    },
    onEnable: function () {

    },
    onDisable: function () {
        reset();
    }
};

