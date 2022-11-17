/// api_version=2
var LB = Java.type("net.ccbluex.liquidbounce.LiquidBounce");
var script = registerScript({
    name: "Leave",
	version: "Release",
	authors: ["dizwi"]
	});

	script.registerModule({
	name: "Leave",
	category: "Movement",
	description: "Allows u to leave from the opponent in hvh"
	}, function (module) {

	    module.on("enable", function() {
	        LB.commandManager.executeCommands(".fly vanilla-vertical 9.9");
	        LB.commandManager.executeCommands(".toggle fly on");

	    });

	    module.on("disable", function() {
	        LB.commandManager.executeCommands(".fly vanilla-vertical 0.8");

        });
	});
