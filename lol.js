Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
Math.degrees = function(radians) {
    return radians * 180 / Math.PI;
};
var EntityLiving = Java.type('net.minecraft.entity.EntityLivingBase');
function randomIntFrom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var C04PacketPlayerPosition = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition');
var KillAura = moduleManager.getModule("KillAura");
var KillAuraRange = KillAura.getValue("Range");

function getClosestEntity(){
	var filteredEntites = []
	for (var i in mc.theWorld.loadedEntityList){
		var entity = mc.theWorld.loadedEntityList[i]

		if (entity instanceof EntityLiving && entity !=mc.thePlayer && entity.isDead == false && entity.getHealth() > 0){
			filteredEntites.push(entity)
		}
	}
	filteredEntites.sort(function(a, b){
		var distanceA = mc.thePlayer.getDistanceToEntity(a)
		var distanceB = mc.thePlayer.getDistanceToEntity(b)

		return distanceB - distanceA;
	})
	return filteredEntites[filteredEntites.length - 1]
}

function Module2() {
    var modes = value.createList("TeleportType", ["Normal", "Behind", "GWEN", "Watchdog"], "Normal");
    var Vertical = value.createBoolean("Vertical", false);
    var KillAuraOnly = value.createBoolean("KillAuraOnly", true);
    var Distance = value.createFloat("TeleportDistance", 4.25, -6, 6.0);
	var VDistance = value.createFloat("TeleportVDistance", 4.25, -6, 6.0);
    var Packet = value.createBoolean("PacketTeleport", true);
    var Reset = value.createBoolean("PacketResetPosition", true);
    var CheckReach = value.createBoolean("CheckReach", true);
    var NoFall = value.createBoolean("NoFallDamage", true);
    var Debug = value.createBoolean("Debug", true);
    this.getName = function() {
        return "tparoundppl";
    };

    this.getDescription = function() {
        return "Teleports around people like ur a anticheat bot.";
    };

    this.getCategory = function() {
        return "Fun";
    };
    var target;
    var times = false
    this.onMotion = function() {
        var target = getClosestEntity();
        if (modes.get() == "Normal") {
            if (((CheckReach.get() && mc.thePlayer.getDistanceToEntity(target) < 10) || CheckReach.get() == false)) {
                if (Packet.get() == false) {
                    if ((KillAuraOnly.get() && (KillAura.getState() == true)) || KillAuraOnly.get() == false) {
                        if (Vertical.get() == false) {
                            mc.thePlayer.setPosition(target.posX + randomIntFrom(-Distance.get(), Distance.get()), target.posY, target.posZ + randomIntFrom(-Distance.get(), Distance.get()))
                            mc.thePlayer.motionY = 0;
                        } else {
                            mc.thePlayer.motionY = 0;
                            mc.thePlayer.setPosition(target.posX + randomIntFrom(-Distance.get(), Distance.get()), target.posY + randomIntFrom(-VDistance.get(), VDistance.get()), target.posZ + randomIntFrom(-Distance.get(), Distance.get()))
                        }
                    }
                } else {
                    if (!Vertical.get()) {
                        if (NoFall.get()) {
                            mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(target.posX + randomIntFrom(-Distance.get(), Distance.get()), target.posY, target.posZ + randomIntFrom(-Distance.get(), Distance.get()), true));
                        } else {
                            mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(target.posX + randomIntFrom(-Distance.get(), Distance.get()), target.posY, target.posZ + randomIntFrom(-Distance.get(), Distance.get()), target.onGround));
                        }
                        if (Reset.get()) {
                            times = true;
                        }
                    } else {
                        if (NoFall.get()) {
                            mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(target.posX + randomIntFrom(-Distance.get(), Distance.get()), target.posY + (randomIntFrom(-VDistance.get(), VDistance.get())), target.posZ + randomIntFrom(-Distance.get(), Distance.get()), true));
                        } else {
                            mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(target.posX + randomIntFrom(-Distance.get(), Distance.get()), target.posY + (randomIntFrom(-VDistance.get(), VDistance.get())), target.posZ + randomIntFrom(-Distance.get(), Distance.get()), target.onGround));
                        }

                        if (Reset.get()) {
                            times = true;
                        }
                    }
                    if (Debug.get()) {
                        chat.print("packeted");
                    }
                }
            }
        }
        if (modes.get() == "Behind") {
            //target.posX - (Math.sin(targetYaw) * Distance.get()), target.posY, target.posZ + (Math.cos(targetYaw) * Distance.get()), target.onGround
            var targetYaw = Math.radians(target.rotationYaw);
            if (((CheckReach.get() && mc.thePlayer.getDistanceToEntity(target) < 10) || CheckReach.get() == false)) {
                if (Packet.get() == false) {
                    if ((KillAuraOnly.get() && (KillAura.getState() == true)) || KillAuraOnly.get() == false) {
                        if (Vertical.get() == false) {
                            mc.thePlayer.setPosition(target.posX - (Math.sin(targetYaw) * Distance.get()), target.posY, target.posZ + (Math.cos(targetYaw) * Distance.get()))
                            mc.thePlayer.motionY = 0;
                        }
                    }
                } else {
                    if (!Vertical.get()) {
                        if (NoFall.get()) {
                            mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(target.posX - (Math.sin(targetYaw) * Distance.get()), target.posY, target.posZ + (Math.cos(targetYaw) * Distance.get()), true));
                        } else {
                            mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(target.posX - (Math.sin(targetYaw) * Distance.get()), target.posY, target.posZ + (Math.cos(targetYaw) * Distance.get()), target.onGround));
                        }
                        if (Reset.get()) {
                            times = true;
                        }
                    }
                    if (Debug.get()) {
                        chat.print("packeted");
                    }
                }
            }
        }
        if (modes.get() == "GWEN") {
            var targetYaw = Math.radians(target.rotationYaw);
            if (((CheckReach.get() && mc.thePlayer.getDistanceToEntity(target) < 10) || CheckReach.get() == false)) {
                if (Packet.get() == false) {
					if(!(mc.thePlayer.ticksExisted % randomIntFrom(0,100))) {
                    if ((KillAuraOnly.get() && (KillAura.getState() == true)) || KillAuraOnly.get() == false) {
                        if (Vertical.get() == false) {
                            mc.thePlayer.setPosition(target.posX - (Math.sin(targetYaw) * Distance.get()), target.posY, target.posZ + (Math.cos(targetYaw) * Distance.get()))
                            mc.thePlayer.motionY = 0;
                        }
                    }
					} else if(target.rotationPitch > -40){ // if the player lookin down more than that then go up
						mc.thePlayer.setPosition(target.posX + randomIntFrom(-.1, .1), target.posY + VDistance.get(), target.posZ + randomIntFrom(-.1, .1))
					} else { // if the player lookin up then go back
						mc.thePlayer.setPosition(target.posX - (Math.sin(targetYaw) * Distance.get()), target.posY, target.posZ + (Math.cos(targetYaw) * Distance.get()))
					}
                } else {
					if(!(mc.thePlayer.ticksExisted % randomIntFrom(0,100))) {
                    if (!Vertical.get()) {
                        if (NoFall.get()) {
                            mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(target.posX - (Math.sin(targetYaw) * Distance.get()), target.posY, target.posZ + (Math.cos(targetYaw) * Distance.get()), true));
                        } else {
                            mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(target.posX - (Math.sin(targetYaw) * Distance.get()), target.posY, target.posZ + (Math.cos(targetYaw) * Distance.get()), target.onGround));
                        }
                        if (Reset.get()) {
                            times = true;
                        }
                    }
                    if (Debug.get()) {
                        chat.print("packeted");
                    }
                } else if(target.rotationPitch > -40){ // move it up and shit
                        if (NoFall.get()) {
                            mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(target.posX + randomIntFrom(-.1, .1), target.posY + (randomIntFrom(-VDistance.get(), VDistance.get())), target.posZ + randomIntFrom(-.1, .1), true));
                        } else {
                            mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(target.posX + randomIntFrom(-.1, .1), target.posY + (randomIntFrom(-VDistance.get(), VDistance.get())), target.posZ + randomIntFrom(-.1, .1), target.onGround));
                        }
				} else {
                        if (NoFall.get()) {
                            mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(target.posX - (Math.sin(targetYaw) * Distance.get()), target.posY, target.posZ + (Math.cos(targetYaw) * Distance.get()), true));
                        } else {
                            mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(target.posX - (Math.sin(targetYaw) * Distance.get()), target.posY, target.posZ + (Math.cos(targetYaw) * Distance.get()), target.onGround));
                        }
				}
				}
            }
        }
    }
    this.onUpdate = function() {
        if (Reset.get() && Packet.get() && times == true) {
            mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, mc.thePlayer.onGround));
            times = false;
            if (Debug.get()) {
                chat.print("reset");
            }
        }
    }
    this.addValues = function(value) {
        value.add(modes);
        value.add(Distance);
		value.add(VDistance);
        value.add(KillAuraOnly);
        value.add(Vertical);
        value.add(Packet);
        value.add(Reset);
        value.add(NoFall);
        value.add(CheckReach);
        value.add(Debug);
    }
}
var Module2 = new Module2();
var Module2Client;





function onEnable() {
    ModuleClient = moduleManager.registerModule(Module);
	Module2Client = moduleManager.registerModule(Module2);
};

function onDisable() {
    moduleManager.unregisterModule(ModuleClient);
	moduleManager.unregisterModule(Module2Client);
};