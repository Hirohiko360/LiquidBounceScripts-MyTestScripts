var scriptName="Debug Camera";var scriptAuthor="Soulplexis";var scriptVersion=1.0;function Derp(){this.getName=function(){return "DebugCamera";}
this.getCategory=function(){return "Render";}
this.getDescription=function(){return "Debug Camera switch!.";}
this.onEnable=function(){mc.gameSettings.debugCamEnable=true;}
this.onDisable=function(){mc.gameSettings.debugCamEnable=false;}}
var derp=new Derp();var derpClient;function onEnable(){derpClient=moduleManager.registerModule(derp);}
function onDisable(){moduleManager.unregisterModule(derpClient);}