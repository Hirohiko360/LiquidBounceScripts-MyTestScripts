/// api_version=2
var LB = Java.type("net.ccbluex.liquidbounce.LiquidBounce");
var speed = 0;
var sss = 0;
var script = registerScript({
    name: "HypixelScript",
	version: "6.9.0",
	authors: ["BilalWare"]
	});
	
	script.registerModule({
	name: "HypixelLongjump",
	category: "movement",
	description: "bruh"
	}, function (module) {
		
		module.on("update", function (event) {
			
			if(mc.thePlayer.onGround == 1 && sss == 1)
			{
				module.setState(false);
			}
			else if(mc.thePlayer.onGround == 1 && mc.gameSettings.keyBindForward.pressed)
			{
				speed = 0.5;
				sss = 1;
				mc.thePlayer.motionY = 0.42;
			}
			if(mc.gameSettings.keyBindForward.pressed)
			{
				if(mc.thePlayer.motionY < 0)
				{
					mc.thePlayer.motionY = mc.thePlayer.motionY + 0.0255;
				}

				if(speed > 0.4)
				{
					speed = speed - 0.0305;
				}
				else if(speed > 0.29)
				{
					speed = speed - 0.02;
				}
				
				setSpeedileri(speed);
			}

	});
	module.on("enable", function (event)
	{
		sss = 0;
	});

	function setSpeedileri(_speed) {
		var playerYaw = Math.radians(mc.thePlayer.rotationYaw);
		mc.thePlayer.motionX = _speed * -Math.sin(playerYaw);
		mc.thePlayer.motionZ = _speed * Math.cos(playerYaw);
	}

	Math.radians = function(degrees) 
	{
		return degrees * Math.PI / 180;
	}

	});