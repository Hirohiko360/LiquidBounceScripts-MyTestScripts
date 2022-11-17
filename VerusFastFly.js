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
	name: "VerusFastFly",
	category: "player",
	description: "bruh"
	}, function (module) {
		
		module.on("update", function (event) {
			mc.thePlayer.motionY = -0.1;
			if(mc.thePlayer.posY < ground && mc.thePlayer.hurtTime < 1)
			{
				mc.thePlayer.motionY = 0.5;

			}

			mc.thePlayer.jumpState = 0;

			if(mc.gameSettings.keyBindJump.pressed) {
				ground = ground + 0.3;
			}
			if(mc.gameSettings.keyBindSneak.pressed) {
				ground = ground + -0.3;
				if(mc.thePlayer.motionY < 0)
				{
					mc.thePlayer.motionY = -0.5;
				}
				
			}
	 	    if(mc.thePlayer.onGround == 0 && mc.gameSettings.keyBindForward.pressed && !mc.gameSettings.keyBindSneak.pressed)
			{

				if(speed < 0.37)
				{
					speed  = speed + 0.01;
				}
			    setSpeed(speed);
			}
			else if(mc.thePlayer.onGround == 0 && mc.gameSettings.keyBindForward.pressed && mc.gameSettings.keyBindSneak.pressed)
			{
				setSpeed(0.17);
			    speed = 0.17;			
			}
			else
			{
				speed = mc.thePlayer.motionX + mc.thePlayer.motionZ;	
			}
		});

		module.on("enable", function () {

			ground = mc.thePlayer.posY + -0.01;
			playertixk = 0;

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
	