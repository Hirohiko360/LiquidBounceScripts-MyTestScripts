/// api_version=2
var LB = Java.type("net.ccbluex.liquidbounce.LiquidBounce");
var nofall = moduleManager.getModule("fly");
var script = registerScript({
    name: "Verus_nofall",
	version: "6.9.0",
	authors: ["BilalWare"]
	});
	
	script.registerModule({
	name: "VerusNofall",
	category: "player",
	description: "bruh"
	}, function (module) {
		
		module.on("update", function (event) {
			
		    if(mc.thePlayer.hurtTime > 1 && mc.thePlayer.onGround == 0 && mc.thePlayer.motionY < -0.4)
			{
				mc.thePlayer.motionY = -0.1;
				Chat.print(mc.thePlayer.motionY);
			}
	 		
		});

		module.on("disable", function () {
		});

	});
	