/// api_version=2
var C0BPacketEntityAction = Java.type("net.minecraft.network.play.client.C0BPacketEntityAction");
var C08PacketPlayerBlockPlacement = Java.type("net.minecraft.network.play.client.C08PacketPlayerBlockPlacement");
var C03PacketPlayer = Java.type("net.minecraft.network.play.client.C03PacketPlayer");
var C16PacketClientStatus = Java.type("net.minecraft.network.play.client.C16PacketClientStatus");
var ticks;
var state;
var worldchange;
var tick;
var detected;
var lastattackticks;
var StringUtils = Java.type('net.minecraft.util.StringUtils');
var S02PacketChat = Java.type('net.minecraft.network.play.server.S02PacketChat');
var LB = Java.type("net.ccbluex.liquidbounce.LiquidBounce");
var a=0;
var asd = 0;
var timer = 3.0;
var script = registerScript({
    name: "FlyCraftplay",
	version: "420",
	authors: ["Hackr"]
	});
				script.registerModule({
					name: "Flycraftplay",
					category: "Exploit",
					description: "Fly For Craftplay"
					}, function (module) {
						module.on("enable", function() {
							LB.commandManager.executeCommands(".disabler fakelag-position");
							LB.commandManager.executeCommands(".fly mode Vulcan3");
							LB.commandManager.executeCommands(".disabler mode FakeLag");
							LB.commandManager.executeCommands(".disabler fakelag-lagdelay 0");
							LB.commandManager.executeCommands(".disabler fakelag-lagduration 240");
							LB.commandManager.executeCommands(".fly vulcan3-timer 3.35");
							LB.commandManager.executeCommands(".t fly");
							LB.commandManager.executeCommands(".t disabler");
						});
						module.on("disable", function() {
							LB.commandManager.executeCommands(".toggle disabler");
							LB.commandManager.executeCommands(".disabler fakelag-position");
						});
					});