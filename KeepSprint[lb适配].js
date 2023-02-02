//Java Scripts - Version 1.2.4 - ScriptsAPI V1
var scriptName = "KeepSprint"
var scriptVersion = 0.1
var scriptAuthor = "XinsLone"
var KeepSprint = new KeepSprint()
var Client

function onEnable() { Client = moduleManager.registerModule(KeepSprint) }
function onDisable() { moduleManager.unregisterModule(Client) }
function KeepSprint() {
    this.getName = function() { return "KeepSprint" }
    this.getCategory = function() { return "Movement" }
    this.getDescription = function() { return "New keepsprint module copy from FDPClient" }
	var //Settings
	AlwaysSprint = value.createBoolean("AlwaysSprint", true)
	NoPacket = value.createBoolean("NoPacket", true)
	Lists = [AlwaysSprint, NoPacket]
    this.addValues = function(lists) {
	for(var l in Lists) { lists.add(Lists[l]) }
    }
	this.onAttack = function(e) {
		if(AlwaysSprint.get()) setSprint(true)
	}
	this.onMotion = function(e) {
		if(AlwaysSprint.get()) setSprint(true)
	}
	this.onPacket = function(e) { var p = e.getPacket()
		if(NoPacket.get() && p instanceof C0B && (p.action==C0B.Action.START_SPRINTING || p.action==C0B.Action.STOP_SPRINTING)) {
			event.cancelEvent()
		}
	}
	this.onUpdate = function() {
		if(StopMoving(2) || getSneak()==true) return
		if(mc.thePlayer.movementInput.moveForward<0.8) {
			setSprint(false)
			return
		}
		setSprint(true)
        }//分函数
    }//总函数
var C0B = Java.type('net.minecraft.network.play.client.C0BPacketEntityAction')
function StopMoving(mode) { //check whether the player isn't moving
    if(mode==1){
        return !getForward() && !getBack() && !getLeft() && !getRight()
    }
    if(mode==2){
        return !mc.thePlayer.movementInput.moveForward && !mc.thePlayer.movementInput.moveStrafe
    }
}
function getSneak() {
        return mc.gameSettings.keyBindSneak.pressed
}
function setSprint(boolean) {
       mc.thePlayer.setSprinting(boolean)
}