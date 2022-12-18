var scriptName="MinemoraSpeed";var scriptAuthor="DinoFeng";var scriptVersion="1.0";var latestupdate="25/2/2022";var script=registerScript({name:"Minemora Speed",version:"1.0",authors:["DinoFeng"]});var MSpeed=0;var DTick=0;var FTick=0;var BTick=1;Math.radians=function(degrees){return degrees*Math.PI/180;};function setSpeed(_speed){var playerYaw=Math.radians(mc.thePlayer.rotationYaw);mc.thePlayer.motionX=_speed*-Math.sin(playerYaw);mc.thePlayer.motionZ=_speed*Math.cos(playerYaw);};function setDiagSpeed(_speed){var playerYaw=Math.radians(mc.thePlayer.rotationYaw+90);mc.thePlayer.motionX=_speed*-Math.sin(playerYaw);mc.thePlayer.motionZ=_speed*Math.cos(playerYaw);};function setMoveSpeed(_speed){if(mc.gameSettings.keyBindLeft.isKeyDown()||mc.gameSettings.keyBindRight.isKeyDown()){setDiagSpeed(_speed*-mc.thePlayer.moveStrafing);}else{setSpeed(_speed*mc.thePlayer.moveForward);}};function getSpeed(){return Math.sqrt(Math.pow(mc.thePlayer.motionX,2)+Math.pow(mc.thePlayer.motionZ,2))};function getRandom(max){return Math.floor(Math.random()*Math.floor(max))};script.registerModule({name:"MineSpeed",description:"Speed For Minemora",category:"Movement",tag:"NULL",settings:{BM:Setting.list({name:"BoostMode",default:"Timer",values:["Timer","TimerGround","Speed"]}),MFTi:Setting.float({name:"Timer",default:4,min:0,max:10})}},function(module){module.on('enable',function(){MSpeed=15;DTick=0;FTick=0;BTick=1;});module.on('update',function(){if(module.settings.BM.get()=="Timer"){module.tag=module.settings.BM.get()+" "+MSpeed+" "+DTick;MSpeed++
if(MSpeed<60&&mc.thePlayer.onGround){if(MSpeed>=18){mc.thePlayer.jump();}}
if(MSpeed>=60){if(MSpeed<61){FTick=DTick+1;Chat.print("Ready For "+FTick+" Boost!");DTick++}}
if(MSpeed<100){if(MSpeed>=17){mc.timer.timerSpeed=1;}}
if(MSpeed>80&&mc.thePlayer.onGround){MSpeed=0;mc.timer.timerSpeed=module.settings.MFTi.get();chat.print("Boost "+DTick);}}
if(module.settings.BM.get()=="TimerGround"&&BTick==1){module.tag=module.settings.BM.get()+" "+MSpeed+" "+DTick;MSpeed++
if(DTick==5){Chat.print("Disable BoostMode")
BTick=0;}
if(MSpeed==40){FTick=DTick+1;Chat.print("Ready For "+FTick+" Boost!");}
if(MSpeed==20){mc.timer.timerSpeed=1;DTick++}
if(MSpeed>50&&mc.thePlayer.onGround){MSpeed=0;mc.timer.timerSpeed=module.settings.MFTi.get();chat.print("Boost "+(DTick+1));}}
if(module.settings.BM.get()=="Speed"&&BTick==1){module.tag=module.settings.BM.get()+" "+MSpeed+" "+DTick
MSpeed++
if(DTick==3){Chat.print("Disable BoostMode");BTick=0;}
if(MSpeed<60&&mc.thePlayer.onGround){if(MSpeed>=15){mc.thePlayer.jump();}}
if(MSpeed>=60){if(MSpeed<61){FTick=DTick+1;Chat.print("Ready For "+FTick+" Boost!");}}
if(MSpeed>80&&mc.thePlayer.onGround){MSpeed=0;setMoveSpeed(2);chat.print("Boost "+DTick);}
if(MSpeed==10){DTick++}}
if(BTick==0){var Speed2="NoBoost";module.tag=Speed2;if(mc.thePlayer.onGround){mc.thePlayer.jump();}}});module.on('disable',function(){mc.timer.timerSpeed=1;});});