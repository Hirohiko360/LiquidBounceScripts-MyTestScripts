var scriptName = "CriticalsAACv4";
var scriptVersion = 1.01;
var scriptAuthor = "SoLegit - SoLegit#0069";

var aacv4Criticals = new AACv4Criticals();

var C04PacketPlayerPosition = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition');

function AACv4Criticals() {
    this.getName = function () {
	return "SLCritical";
    };
    this.getDescription = function () {
	return "";
    };
    this.getCategory = function () {
      return "Fun";
    };
    this.getTag = function () {
      return "ok em";
    };
    this.onAttack = function (event) {
        mc.netHandler.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 1.949e-13, mc.thePlayer.posZ, !mc.thePlayer.onGround));
        mc.netHandler.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 1.153e-13, mc.thePlayer.posZ, !mc.thePlayer.onGround));
    };
}

function onEnable() {
    moduleManager.registerModule(aacv4Criticals);
};
function onDisable() {
    moduleManager.unregisterModule(aacv4Criticals);
};