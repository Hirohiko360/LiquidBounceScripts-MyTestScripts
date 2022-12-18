var scriptName="MoonJump";var scriptVersion=1.0;var scriptAuthor="soulplexis";var highJump=new HighJump();var highJumpClient;function randomIntFrom(min,max)
{return Math.floor(Math.random()*(max-min+1)+min);}
function randomFloatFrom(min,max)
{return Math.random()*(max-min)+min;}
function HighJump(){this.getName=function(){return "RandomJump";};this.getDescription=function(){return "Makes you jump at random heights.";};this.getCategory=function(){return "Fun";};this.onUpdate=function(){if(mc.thePlayer.onGround){mc.thePlayer.motionY+=randomFloatFrom(0.01,0.84);}}
this.onDisable=function(){mc.thePlayer.motionY=0.0;}}
function onLoad(){};function onEnable(){highJumpClient=moduleManager.registerModule(highJump);};function onDisable(){moduleManager.unregisterModule(highJumpClient);};