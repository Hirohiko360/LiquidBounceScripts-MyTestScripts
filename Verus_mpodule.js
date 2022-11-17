/// api_version=2
var LB = Java.type("net.ccbluex.liquidbounce.LiquidBounce");
var C08 = Java.type("net.minecraft.network.play.client.C08PacketPlayerBlockPlacement");
var BlockPos = Java.type('net.minecraft.util.BlockPos');
var ItemStack = Java.type('net.minecraft.item.ItemStack');
var playerptick = 0;
var script = registerScript({
    name: "BMCFLY",
	version: "6.9.0",
	authors: ["BilalWare"]
	});
	
	script.registerModule({
	name: "VerusSpeedfast",
	category: "movement",
	description: "S",
	mode: "BilalWare"
	}, function (module) {
		
		module.on("update", function (event) {

			if(mc.thePlayer.onGround == 1)
			{
				if(mc.gameSettings.keyBindForward.isKeyDown() || mc.gameSettings.keyBindBackward.isKeyDown() || mc.gameSettings.keyBindLeft.isKeyDown() || mc.gameSettings.keyBindRight.isKeyDown())
				{
					if(playerptick % 10 == 0)
					{
						mc.thePlayer.onGround = 0;
						mc.thePlayer.motionY = 0.01;
						setSpeed(0.34);
					}
					else
					{
						mc.thePlayer.onGround = 0;
						setSpeed(0.56);
					}

				}
			

			}

            playerptick++;
		});

		module.on("enable", function () {
			playerptick = 0;
		});
		
		module.on("disable", function () {
			playerptick = 0;
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