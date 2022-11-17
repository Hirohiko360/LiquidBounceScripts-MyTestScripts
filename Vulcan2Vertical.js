var C02 = Java.type("net.minecraft.network.play.client.C02PacketUseEntity");
var C02A = Java.type("net.minecraft.network.play.client.C02PacketUseEntity.Action");
var C16 = Java.type("net.minecraft.network.play.client.C16PacketClientStatus");
var C0F = Java.type("net.minecraft.network.play.client.C0FPacketConfirmTransaction");
var C06 = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook");
var C05 = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook')
var C03 = Java.type("net.minecraft.network.play.client.C03PacketPlayer");
var C04 = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition");
var C08 = Java.type("net.minecraft.network.play.client.C08PacketPlayerBlockPlacement");
var C09 = Java.type('net.minecraft.network.play.client.C09PacketHeldItemChange');
var S02 = Java.type("net.minecraft.network.play.server.S02PacketChat");
var S12 = Java.type('net.minecraft.network.play.server.S12PacketEntityVelocity');
var C07 = Java.type("net.minecraft.network.play.client.C07PacketPlayerDigging");
var BlockPos = Java.type('net.minecraft.util.BlockPos');
var thePlayer = Java.type("net.ccbluex.liquidbounce.utils.MovementUtils");
var Block = Java.type('net.minecraft.block.Block');
var Blocks = Java.type('net.minecraft.init.Blocks');
var S08 = Java.type('net.minecraft.network.play.server.S08PacketPlayerPosLook');
var RotationUtils = Java.type('net.ccbluex.liquidbounce.utils.RotationUtils');
var Rotation = Java.type('net.ccbluex.liquidbounce.utils.Rotation');
var ItemBucket = Java.type("net.minecraft.item.ItemBucket");
var GuiChest = Java.type("net.minecraft.client.gui.inventory.GuiChest");
var Blocks = Java.type("net.minecraft.init.Blocks");
var EntityBoat = Java.type("net.minecraft.entity.item.EntityBoat");
var MovementUtils = Java.type("net.ccbluex.liquidbounce.utils.MovementUtils")
function ChatP(_Chat) {Chat.print("§8[§e§lDinoFly§8] §f§l" + _Chat)}
Math.radian = function(deg) {return deg * Math.PI / 180}
function getScaledWidth() {var scaledWidth = new ScaledResolution(mc).getScaledWidth();return scaledWidth}
function getScaledHeight() {var scaledHeight = new ScaledResolution(mc).getScaledHeight();return scaledHeight}
function clip(dist, y) {var yaw = Math.radian(mc.thePlayer.rotationYaw);var x = -Math.sin(yaw) * dist;var z = Math.cos(yaw) * dist;mc.thePlayer.setPosition(mc.thePlayer.posX + x, mc.thePlayer.posY + y, mc.thePlayer.posZ + z);mc.thePlayer.sendQueue.addToSendQueue(new C04(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false))}
function setSpeed(_speed) {var playerYaw = Math.radian(mc.thePlayer.rotationYaw);mc.thePlayer.motionX = _speed * -Math.sin(playerYaw);mc.thePlayer.motionZ = _speed * Math.cos(playerYaw)}
function setDiagSpeed(_speed) {var playerYaw = Math.radian(mc.thePlayer.rotationYaw + 90);mc.thePlayer.motionX = _speed * -Math.sin(playerYaw);mc.thePlayer.motionZ = _speed * Math.cos(playerYaw)}
function setMoveSpeed(_speed) {if (mc.gameSettings.keyBindLeft.isKeyDown() || mc.gameSettings.keyBindRight.isKeyDown()) {setDiagSpeed(_speed*-mc.thePlayer.moveStrafing);} else {setSpeed(_speed * mc.thePlayer.moveForward)}}
function Forward(_s) {var dir = Math.radian(mc.thePlayer.rotationYaw);mc.thePlayer.motionX += -Math.sin(dir) * _s;mc.thePlayer.motionZ += Math.cos(dir) * _s}
function Right(_s) {var dir = Math.radian(mc.thePlayer.rotationYaw + 90);mc.thePlayer.motionX += -Math.sin(dir) * _s;mc.thePlayer.motionZ += Math.cos(dir) * _s}
function Back(_s) {var dir = Math.radian(mc.thePlayer.rotationYaw + 180);mc.thePlayer.motionX += -Math.sin(dir) * _s;mc.thePlayer.motionZ += Math.cos(dir) * _s}
function Left(_s) {var dir = Math.radian(mc.thePlayer.rotationYaw + 270);mc.thePlayer.motionX += -Math.sin(dir) * _s;mc.thePlayer.motionZ += Math.cos(dir) * _s}
function hor(_speed) {if (mc.gameSettings.keyBindForward.isKeyDown()) {Forward(_speed)}; if(mc.gameSettings.keyBindRight.isKeyDown()) {Right(_speed)};if (mc.gameSettings.keyBindBack.isKeyDown()) {Back(_speed)};if (mc.gameSettings.keyBindLeft.isKeyDown()) {Left(_speed)}}
function ver(_speed) {if (mc.gameSettings.keyBindJump.isKeyDown()) {mc.thePlayer.motionY += _speed};if (mc.gameSettings.keyBindSneak.isKeyDown()) {mc.thePlayer.motionY -= _speed}}
var Ready = false
var Ready2 = false
var Tick = 0
script.registerModule({
    name: "FlyVulcan2Vertical",
    description: "Funny",
    category: "Movement",
    settings: {
    }
}, function (module) {
    module.on("update", function () {
        if(mc.gameSettings.keyBindJump.pressed && moduleManager.getModule("Fly").getState(true)) {
            mc.thePlayer.motionY = 1
        }
        if(mc.gameSettings.keyBindSneak.pressed && moduleManager.getModule("Fly").getState(true)) {
            mc.thePlayer.motionY = -1
        }
    });
    module.on("disable", function () {
    });
});