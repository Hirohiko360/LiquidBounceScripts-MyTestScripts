/// api_version=2
var LB = Java.type("net.ccbluex.liquidbounce.LiquidBounce");
var nofall = moduleManager.getModule("fly");
var script = registerScript({
    name: "Verus_AntiVoid",
	version: "6.9.0",
	authors: ["BilalWare"]
	});
	
	script.registerModule({
	name: "VerusAntiVoid",
	category: "player",
	description: "bruh"
	}, function (module) {
		
		module.on("update", function (event) {
			
		    if(mc.thePlayer.hurtTime > 1)
			{
				mc.thePlayer.motionY = 2;
				Chat.print(mc.thePlayer.motionY);
				module.setState(false);
			}
	 		
		});
	});
	