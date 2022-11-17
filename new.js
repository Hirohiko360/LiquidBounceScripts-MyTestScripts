/// api_version=2
var pseudoSelfDamager = new PseudoSelfDamager();
var C04PacketPlayerPosition = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition');
var C06PlayerPacket = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook');
var C05PacketPlayerLook = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook');
var C03PacketPlayer = Java.type('net.minecraft.network.play.client.C03PacketPlayer');
var S08PacketPlayerPosLook = Java.type("net.minecraft.network.play.server.S08PacketPlayerPosLook");
var packet;
var client;

var script = registerScript({
    name: "d1111111111",
    version: "2.0.0",
    authors: ["yby360"]
});

script.registerModule({
	name: "daaaaaaaaaaaa",
	category: "Fun",
	description: "bruhL"
function sb() {
    var Mode = value.createList("Mode", ["Basic", "YPort", "YPort2", "VClip", "PacketJump", "OldNCP"，"Old", "New", "New2", "Sigma", "Hypixel"], "Basic"，"Old");
    var OnlyOnGround = value.createBoolean("OnlyOnGround", true);
	var dmg = value.createInteger("DamageAmount", 1, 1, 20);
	var offset = value.createFloat("YOffset", 0.62, 0.01, 1.0);
	this.addValues = function (values) {
        values.add(Mode);
        values.add(OnlyOnGround);
    }
    this.onEnable = function () {
if (!mc.thePlayer.isOnLadder() && !mc.thePlayer.isInWeb && !mc.thePlayer.isInWater() && !mc.thePlayer.isInLava() && mc.thePlayer.ridingEntity == null && (mc.thePlayer.onGround || !OnlyOnGround.get())){
        switch (Mode.get()) {
        case "Basic":
            if (mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(0, 0.278, 0).expand(0, 0, 0)).isEmpty()) {
                for (var i = 0; i <= 10; ++i) {
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.278, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false));
                    if (i == 10)
                        mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, true));
                }
            } else {
                chat.print("§cNot enough space (0.278 blocks min distance between you and the block above you)")
            }
            break;
        case "YPort":
            if (mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(0, 0.42, 0).expand(0, 0, 0)).isEmpty()) {
                for (var i = 0; i <= 7; ++i) {
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.41999998688698, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false));
                    if (i == 7)
                        mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, true));
                }
            } else {
                chat.print("§c没空间)")
            }
            break;
        case "YPort2":
            if (mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(0, 1.00133597911214, 0).expand(0, 0, 0)).isEmpty()) {
                for (var i = 0; i <= 2; ++i) {
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.41999998688698, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.7531999805212, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 1.00133597911214, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false));
                    if (i == 2)
                        mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, true));
                }
            } else {
                chat.print("§c没空间)")
            }
            break;
        case "VClip":
            if (mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(0, 3.45, 0).expand(0, 0, 0)).isEmpty()) {
                mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 3.45, mc.thePlayer.posZ, false));
                mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false));
                mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, true));
            } else {
                chat.print("§c没空间)")
            }
            break;
        case "PacketJump":
            if (mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(0, 1.2, 0).expand(0, 0, 0)).isEmpty()) {
                for (var i = 0; i <= 2; ++i) {
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.41999998688698, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.7531999805212, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 1.00133597911214, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 1.16610926093821, mc.thePlayer.posZ, false));
                    if (mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(0, 1.24918707874468, 0).expand(0, 0, 0)).isEmpty()) {
                        mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 1.24918707874468, mc.thePlayer.posZ, false));
                    } else {
                        mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 1.2, mc.thePlayer.posZ, false));
                    }
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 1.1707870772188, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 1.0155550727022, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.78502770378924, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.4807108763317, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.10408037809304, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, i == 2));
                }
            } else {
                chat.print("§c没空间)")
            }
            break;
        case "OldNCP":
            if (mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(0, 0.0625, 0).expand(0, 0, 0)).isEmpty()) {
                for (var i = 0; i <= 48; ++i) {
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.0625, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false));
                    if (i == 48)
                        mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, true));
                }
            } else {
                chat.print("§c没空间)")
            }
            break;
case "Old":
            for(var i = 0; i < 80 + 20 * (dmg.get() -  1); i++)
            {
                mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.mc.thePlayer.posX, mc.thePlayer.mc.thePlayer.posY + 0.049, mc.thePlayer.mc.thePlayer.posZ, false));
                mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.mc.thePlayer.posX, mc.thePlayer.mc.thePlayer.posY, mc.thePlayer.mc.thePlayer.posZ, false));
            }
            mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.mc.thePlayer.posX, mc.thePlayer.mc.thePlayer.posY, mc.thePlayer.mc.thePlayer.posZ, true));
			break;
			case "New":
			 for(var i = 0; i < 70; ++i) {
                mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.06, mc.thePlayer.posZ, false));
                mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false));
            }
            mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.1, mc.thePlayer.posZ, false));
			break;
			case "New2":
			for(var i = 0; i < 65 * dmg.get(); ++i) {
                mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.049, mc.thePlayer.posZ, false));
                mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false));
            }

            mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, true));
			break;
			case "Sigma":
			   if (mc.thePlayer.onGround) {
                for (var i = 0; i <= ((3 + dmg.get()) / offset.get()); i++) {
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX,mc.thePlayer.posY + offset.get(), mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX,mc.thePlayer.posY, mc.thePlayer.posZ, (i == ((3 + dmg.get()) / offset.get()))));
                }
            }
			break;
			case "Hypixel":
			   if (mc.thePlayer.onGround) {
                for (var i = 0; i <= ((3 + dmg.get()) / offset.get()); i++) {
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX,mc.thePlayer.posY + offset.get(), mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX,mc.thePlayer.posY, mc.thePlayer.posZ, (i == ((3 + dmg.get()) / offset.get()))));
                }
            }
			if(mc.thePlayer.onGround) {
				mc.thePlayer.motionY = 0.42;
			}
			break;
			default:
			chat.print("草拟吗，你真nb");
	this.onMotion = function() {
		commandManager.executeCommand(".t daaaaaaaaaaaa");
	}
	this.onDisable = function() {
	}
	this.onPacket = function(event) {
	}
	this.addValues = function(soul) {
		soul.add(Mode);
		soul.add(dmg);
		soul.add(offset);
	}
}

var sb = new sb();
var sbClient;

function onEnable() {
    sbClient = moduleManager.registerModule(sb);
}

function onDisable() {
    moduleManager.unregisterModule(sbClient);
}