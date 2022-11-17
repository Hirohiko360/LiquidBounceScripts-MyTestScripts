/// api_version=2
var script = registerScript({
    name: "HudManager",
    version: "1.0.0",
    authors: ["As_pw"]
});

var LiquidBounce = Java.type("net.ccbluex.liquidbounce.LiquidBounce");
var ButtonElement = Java.type("net.ccbluex.liquidbounce.ui.client.clickgui.elements.ButtonElement");
var Panel = Java.type("net.ccbluex.liquidbounce.ui.client.clickgui.Panel");

var localSettingsButtons = [];

var LocalFiles = LiquidBounce.fileManager.themesDir.listFiles();

var Timer = Java.type("java.util.Timer");

function setTimeout(func, milliseconds) {
    var timer = new Timer("setTimeout", true);
    timer.schedule(function() { 
        func();
    }, milliseconds);

    return timer;
}

var APanel = Java.extend(Panel, { setupItems: function() {} });
var localSettingsPanel = APanel.class.getConstructors()[0].newInstance("Hud Manager (As)", 478, 51, 100, 18, true);
var isPanelEnabled = false;
var hasLoadedPanel = false;
var prevLocalListLength = LocalFiles.length;
var LocalListLength = LocalFiles.length;

function createLocalSettingsButton(name) {
	
	var length = localSettingsButtons.length;
	localSettingsButtons[length] = {
		button: new (Java.extend(ButtonElement))(name) {
			mouseClicked: function(mouseX, mouseY, mouseButton) {
				var setting = localSettingsButtons[length];
				if (setting.button.isHovering(mouseX, mouseY)) {
					switch (mouseButton) {
						case 0:
							commandManager.executeCommands(".localtheme load " + name);
						break;
							
						case 1:
							if (settingsObject.RetardSafe.get() ? setting.shouldOverwrite : true) {
								commandManager.executeCommands(".localtheme save " + name);
								setting.shouldOverwrite = false;
								if (settingsObject.RetardSafe.get()) {
									setting.overwriteTimer.cancel();
								}
							} else {
								Chat.print("If you want to overwrite Hud, right-click again!");
								setting.shouldOverwrite = true;
								setting.overwriteTimer = setTimeout(function() {
									setting.shouldOverwrite = false;
								}, 1500);
							}
							
						break;
						
						case 2:
							if (settingsObject.RetardSafe.get() ? setting.shouldDelete : true) {
								commandManager.executeCommands(".localconfig delete " + name);
								setting.shouldDelete = false;
								if (settingsObject.RetardSafe.get()) {
									setting.deleteTimer.cancel();
								}
							} else {
								Chat.print("If you want to overwrite Hud, middle-click again!");
								setting.shouldDelete = true;
								setting.deleteTimer = setTimeout(function() {
									setting.shouldDelete = false;
								}, 1500);
							}
							
						break;
					}
				}
			}
		},
		shouldOverwrite: false,
		shouldDelete: false,
		overwriteTimer: 0,
		deleteTimer: 0
	}
	return localSettingsButtons[length].button;
}


var settings = [
	   
		Setting.boolean({
            name: "UsePanel",
            default: true
        }),
		Setting.boolean({
            name: "RetardSafe",
            default: true
        }),

]

var settingsObject = {};
for (var i = 0; i < settings.length; i++) {
    settingsObject[settings[i].getName()] = settings[i];
}

script.registerModule({
    name: "HudManager",
    description: "Made by As_pw https://www.youtube.com/c/As0452",
    category: "Render",
    settings: settingsObject
}, function (module) {
    module.on("enable", function () {
		hasLoadedPanel = false;
		prevLocalListLength = LocalFiles.length;
		LocalListLength = LocalFiles.length;
    });
	
	module.on("disable", function () {
 		 setTimeout(function() {
                var autoDisableModule = moduleManager.getModule("HudManager");
                autoDisableModule.setState(true);
		}, 20);    
    });
	
	module.on("update", function () {
 		if (LiquidBounce.clickGui != null && settingsObject.UsePanel.get()) {
			LocalFiles = LiquidBounce.fileManager.themesDir.listFiles();
			LocalListLength = LocalFiles.length;
			
			if (!isPanelEnabled) {
				isPanelEnabled = true;
				LiquidBounce.clickGui.panels.add(localSettingsPanel);
			} else if (!hasLoadedPanel) {
				hasLoadedPanel = true;
				
				var localsettingsElements = localSettingsPanel.getElements();
				for (i in localsettingsElements) {
					
					localSettingsPanel.getElements().remove(localsettingsElements[0]);
				}
			
				for (i in LocalFiles) {
					localSettingsPanel.getElements().add(createLocalSettingsButton(LocalFiles[i].getName()));
					
				}
			}
			
			if (hasLoadedPanel && LocalListLength != prevLocalListLength) {
				prevLocalListLength = LocalListLength;
				hasLoadedPanel = false;
			}
			
		} else if (LiquidBounce.clickGui != null && !settingsObject.UsePanel.get()) {
			isPanelEnabled = false;
			LiquidBounce.clickGui.panels.remove(localSettingsPanel);
		}     
    });
});

script.on("enable", function() {
    setTimeout(function() {
		commandManager.executeCommands(".t hudmanager")
	}, 2500);
});

script.on("disable", function() {
    LiquidBounce.clickGui.panels.remove(localSettingsPanel);
});



