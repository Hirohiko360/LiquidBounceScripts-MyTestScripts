
script.import('function/NormalFunctions.js')
script.import('Core.lib')
var scriptName = "GuiMove"
var scriptVersion = 0.1
var scriptAuthor = "XinsLone"
var GuiMove = new GuiMove()
var Client

function onEnable() { Client = moduleManager.registerModule(GuiMove) }
function onDisable() { moduleManager.unregisterModule(Client) }
function GuiMove() {
    this.getName = function() { return "GuiMove" }
    this.getCategory = function() { return "Movement" }
    this.getDescription = function() { return "Keep you moving while opening container" }
	var //Misc
	packetListYes = mutableListOf[C0E]()

	var //Settings
	Type = value.createList("Type", ["AAC", "Hypixel"], "Hypixel")
	Lists = [Type]
    this.addValues = function(lists) {
	for(var l in Lists) { lists.add(Lists[l]) }
    }
function updateKeyState(){
	if(mc.currentScreen!=null && !(mc.currentScreen instanceof GuiChat || mc.currentScreen instanceof GuiContainer)) {
		mc.gameSettings.keyBindForward.pressed = GameSettings.isKeyDown(mc.gameSettings.keyBindForward)
		mc.gameSettings.keyBindBack.pressed = GameSettings.isKeyDown(mc.gameSettings.keyBindBack)
		mc.gameSettings.keyBindRight.pressed = GameSettings.isKeyDown(mc.gameSettings.keyBindRight)
		mc.gameSettings.keyBindLeft.pressed = GameSettings.isKeyDown(mc.gameSettings.keyBindLeft)
		mc.gameSettings.keyBindJump.pressed = GameSettings.isKeyDown(mc.gameSettings.keyBindJump)
		mc.gameSettings.keyBindSneak.pressed = GameSettings.isKeyDown(mc.gameSettings.keyBindSneak)
		mc.gameSettings.keyBindSprint.pressed = GameSettings.isKeyDown(mc.gameSettings.keyBindSprint)
	}
}
	this.onMotion = function(e) {
		updateKeyState()
	}
	this.onScreen = function(e) {
		updateKeyState()
	}
	this.onDisable = function() {
		if(!GameSettings.isKeyDown(mc.gameSettings.keyBindForward) || mc.currentScreen!=null) {
			setForward(false)
		}
		if(!GameSettings.isKeyDown(mc.gameSettings.keyBindBack) || mc.currentScreen!=null) {
			setBack(false)
		}
		if(!GameSettings.isKeyDown(mc.gameSettings.keyBindRight) || mc.currentScreen!=null) {
			setRight(false)
		}
		if(!GameSettings.isKeyDown(mc.gameSettings.keyBindLeft) || mc.currentScreen!=null) {
			setLeft(false)
		}
		if(!GameSettings.isKeyDown(mc.gameSettings.keyBindJump) || mc.currentScreen!=null) {
			setJump(false)
		}
		if(!GameSettings.isKeyDown(mc.gameSettings.keyBindSprint) || mc.currentScreen!=null) {
			setSprint(false)
		}
		if(!GameSettings.isKeyDown(mc.gameSettings.keyBindSneak) || mc.currentScreen!=null) {
			setSneak(false)
		}
	}
	this.onPacket = function(e) { var p = e.getPacket()
		switch(Type.get()) {
		case "AAC":
			if(p instanceof C16 && p.status==C16.EnumState.OPEN_INVENTORY_ACHIEVEMENT) e.cancelEvent()
		break
		case "Hypixel":
			if(p instanceof C16 && p.status==C16.EnumState.OPEN_INVENTORY_ACHIEVEMENT) e.cancelEvent()
			if(p instanceof C0D) event.cancelEvent()
			if(p instanceof C0E) {
				packetListYes.clear()
				packetListYes.add(p)
				event.cancelEvent()
				mc.netHandler().addToSendQueue(new C16(C16.EnumState.OPEN_INVENTORY_ACHIEVEMENT))
				packetListYes.forEach {
					mc.netHandler().addToSendQueue(new it())
				}
				packetListYes.clear()
				mc.netHandler().addToSendQueue(new C0D(mc.thePlayer.inventoryContainer.windowId))
			}
		break
		}
        }//分函数
    }//总函数