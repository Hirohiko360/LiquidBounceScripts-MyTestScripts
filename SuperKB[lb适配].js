//Java Scripts - Version 1.2.4 - ScriptsAPI V1
var scriptName = "SuperKB"
var scriptVersion = 0.1
var scriptAuthor = "§lXinsLone"
var SuperKB = new SuperKB()
var Client

function onEnable() { Client = moduleManager.registerModule(SuperKB) }
function onDisable() { moduleManager.unregisterModule(Client) }
function SuperKB() {
    this.getName = function() { return "SuperKB" }
    this.getCategory = function() { return "Combat" }
    this.getDescription = function() { return "Wtap mode copy from FDPClient" }
    this.getTag = function() { return "WTap" }
	var //Settings
	MaxRange = value.createInteger("MaxRange", 4.20, 0.10, 6.00)
	HurtTime = value.createInteger("HurtTime", 20, 0, 20)
	OnlyGround = value.createBoolean("OnlyGround", false)
	OnlyMove = value.createBoolean("OnlyMove", false)
	Delay = value.createInteger("Delay", 1, 1, 20)
	Lists = [MaxRange, Delay, HurtTime, OnlyGround, OnlyMove]
    this.addValues = function(lists) {
	for(var l in Lists) { lists.add(Lists[l]) }
    }
	this.onUpdate = function() { ticks++
		if(ticks<=Delay.get()) setForward(false)
		if(ticks==Delay.get()+1) setForward(true)
	}
	this.onAttack = function(e) {
			var target = e.targetEntity()
		if(target instanceof EntityLivingBase) {
			if(target.hurtTime>HurtTime.get() || (StopMoving(2) && OnlyMove.get()) || (getOnGround()==false && OnlyGround.get()) || mc.thePlayer.getDistanceToEntity(target)>MaxRange.get()) return
			ticks = 0
		}
        }//分函数
    }//总函数
function StopMoving(mode) { //check whether the player isn't moving
    if(mode==1){
        return !getForward() && !getBack() && !getLeft() && !getRight()
    }
    if(mode==2){
        return !mc.thePlayer.movementInput.moveForward && !mc.thePlayer.movementInput.moveStrafe
    }
}
function getOnGround() {
        return mc.thePlayer.onGround
}
function setForward(boolean) {
        mc.gameSettings.keyBindForward.pressed = boolean
}