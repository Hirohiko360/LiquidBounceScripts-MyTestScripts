//Java Scripts - Version 1.2.4 - ScriptsAPI V1
script.import('function/NormalFunctions.js')
var scriptName = "MinecraftFixed"
var scriptVersion = 0.1
var scriptAuthor = "§lXinsLone"
var MinecraftFixed = new MinecraftFixed()
var Client

function onEnable() { Client = moduleManager.registerModule(MinecraftFixed) }
function onDisable() { moduleManager.unregisterModule(Client) }
function MinecraftFixed() {
    this.getName = function() { return "MinecraftFixed" }
    this.getCategory = function() { return "Misc" }
    this.getDescription = function() { return "Better Minecraft" }
	var
	NoSmoothCamera = value.createBoolean("NoSmoothCamera", true)
	MultiAction = value.createBoolean("MultiAction", true)
	Title = value.createText("Title", "Minecraft 1.8.9")
	MemoryFix = value.createBoolean("MemoryFix", true)
	Lists = [Title, MultiAction, MemoryFix, NoSmoothCamera]
    this.addValues = function(lists) {
	for(var l in Lists) { lists.add(Lists[l]) }
    }
	this.onUpdate = function() {
			Display.setTitle(Title.get())
		if(MultiAction.get() && getUseItem()==true && getAttack()==true) {
			mc.thePlayer.swingItem()
		} if(MemoryFix.get()) {
			if(isMoving(1) && getOnGround()==false) mc.thePlayer.cameraYaw = 0.05
			if(StopMoving(1)) mc.thePlayer.cameraYaw = 0.0
		} if(NoSmoothCamera.get()) {
			mc.gameSettings.smoothCamera = false
		}
        }//分函数
    }//总函数