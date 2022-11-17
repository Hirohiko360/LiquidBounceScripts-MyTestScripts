var scriptName = "666";
var scriptVersion = 0.2;
var scriptAuthor = "lol";

var Desktop = Java.type(java.awt.Desktop);
var File = Java.type(Java.io.File);
var Java.type(java.io.IOException);

this.getName = function () {
        return "hwid";
    }

    this.getDescription = function () {
        return "by hirohiko";
    }

    this.getCategory = function () {
        return "Misc";
    }
function onLoad() {
	File file = new File("F:\mc\.minecraft\LiquidBounce-1.8.9\clickgui.json"); 
	Desktop.getDesktop().open(file);
	onLoad ee = new onLoadFile();
       	 ee.openFile("F:\mc\.minecraft\LiquidBounce-1.8.9\clickgui.json");
}

}

}
