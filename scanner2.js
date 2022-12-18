var scriptName="Scanner 2";var scriptAuthor="Soulplexis";var scriptVersion=1.0;var colorIndex=0;function randomIntFrom(min,max)
{return Math.floor(Math.random()*(max-min+1)+min);}
function ColorChatModule(){var go=true;var value=0;this.getName=function(){return "Scanner2";}
this.getCategory=function(){return "Misc";}
this.getDescription=function(){return "Scans for server activities.";}
this.onEnable=function(){go=true;chat.print("§1[Protocol] §9Scanning for IDs in server (1 in 1Million), player is: §6"+mc.thePlayer.getName())}
this.onMotion=function(){if(go==true){value=randomIntFrom(-1000000,1000000);chat.print("§1[Protocol] §9"+value)
if(value==randomIntFrom(-1000000,1000000)){chat.print("§4[Protocol] §c"+value);go=false;}}}
this.onDisable=function(){go=true;}}
var colorChatModule=new ColorChatModule();var colorChatModuleClient;function onEnable(){colorChatModuleClient=moduleManager.registerModule(colorChatModule);}
function onDisable(){moduleManager.unregisterModule(colorChatModuleClient);}