/// api_version=2
var LB = Java.type("net.ccbluex.liquidbounce.LiquidBounce");
var C08 = Java.type("net.minecraft.network.play.client.C08PacketPlayerBlockPlacement");
var BlockPos = Java.type('net.minecraft.util.BlockPos');
var ItemStack = Java.type('net.minecraft.item.ItemStack');
var fly = moduleManager.getModule("fly");
var playerptick = 0;
var timers = 0;
var closetick = 0;
var script = registerScript({
    name: "BMCFLY",
	version: "6.9.0",
	authors: ["BilalWare"]
	});
	
	script.registerModule({
	name: "Bmc_antiban",
	category: "Exploit",
	description: "S",
	mode: "BilalWare"
	}, function (module) {
		
		module.on("update", function (event) {
            playerptick++;

			if(playerptick > 50)
			{
				module.setState(false);
			}
		});

		module.on("enable", function () {


			if(mc.thePlayer.onGround == 0)
			{
				playerptick = 51;
			}
			else
			{
			    playerptick = 0;
				fly.setState(true);
			}
			
		});
		
		module.on("disable", function () {

			fly.setState(false);
			     
		});

	});