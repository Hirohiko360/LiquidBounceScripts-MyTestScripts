/// api_version=2
var LB = Java.type("net.ccbluex.liquidbounce.LiquidBounce");
var ground = 0.00;
var speed = 0;
var script = registerScript({
    name: "Verus_nofall",
	version: "6.9.0",
	authors: ["BilalWare"]
	});
	
	script.registerModule({
	name: "VerusSpeed",
	category: "player",
	description: "bruh"
	}, function (module) {
		
		module.on("update", function (event) {
			
			mc.thePlayer.motionY = -0.001;
			if(mc.gameSettings.keyBindForward.pressed || mc.gameSettings.keyBindLeft.pressed || mc.gameSettings.keyBindRight.pressed || mc.gameSettings.keyBindBack.pressed)
			{
				
			setSpeed(0.37);

			}
		});
	});

	function setSpeed(_speed) {
		var playerYaw = Math.radians(mc.thePlayer.rotationYaw);
		mc.thePlayer.motionX = _speed * -Math.sin(playerYaw);
		mc.thePlayer.motionZ = _speed * Math.cos(playerYaw);
	}


	Math.radians = function(degrees) {
		return degrees * Math.PI / 180;
	};
	