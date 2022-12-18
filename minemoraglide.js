var scriptName="MinemoraGlide";var scriptVersion="6.9";var scriptAuthor="HeistHacks";var glideDelay=0
var othervar=4
script.registerModule({name:"MinemoraGlide",description:"u can suck more dicks at once",category:"Movement",tag:"by HeistHacks",settings:{Mode:Setting.list({name:"Mode",default:"NEWglide",values:["NEWglide","OLDglide","CUSTOMglide"]}),ScriptInfo:Setting.boolean({name:"ScriptInfo",default:false}),GlideTicks:Setting.integer({name:"GlideTicks",default:4,min:1,max:10}),motionY_UP:Setting.float({name:"motionY_UP",default:0.15,min:0,max:0.3}),motionY_Down:Setting.float({name:"motionY_Down",default:-0.0784,min:-0.1,max:0}),CustomTimer:Setting.float({name:"CustomTimer",default:0.7,min:0,max:1}),SeeCustomTicks:Setting.boolean({name:"SeeCustomTicks",default:false})}},function(module){module.on("enable",function(){glideDelay=0;if(module.settings.ScriptInfo.get()==true){chat.print("")
chat.print("§bScript by: §5 "+scriptAuthor)
chat.print("§7~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
chat.print("§bDiscord: §5 https://www.dsc.gg/heisthacks")
chat.print("§7~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
chat.print("§bYoutube: §5 https://www.youtube.com/channel/UCEYOQe0qFPdJ7FwfZWCkXZA")
chat.print("§7~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
chat.print("§bLB-Forum: §5 https://forums.ccbluex.net/user/schooaasch")
chat.print("§7~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
chat.print("§bInfos: §5Don't work in the Lobby or gamemodes like ArenaPvP. FDP might not like the Setting.list so type in the Chat which mode you want with commands (.MinemoraGlide mode <Glide>)")
chat.print("§7~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
chat.print("§bScript-Version: §5 "+scriptVersion)
chat.print("§7~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
chat.print("§7(Disable ScriptInfo to remove this message)")
chat.print("")}
if(module.settings.Mode.get()=="CUSTOMglide"){mc.timer.timerSpeed=module.settings.CustomTimer.get();}
else{mc.timer.timerSpeed=0.7;}})
module.on('update',function(){if(module.settings.Mode.get()=="NEWglide"){mc.thePlayer.motionY=-0.0784
if(!mc.thePlayer.onGround){glideDelay++}
if(glideDelay>=othervar&&!mc.thePlayer.onGround){glideDelay=0
mc.thePlayer.motionY=0.015}}
if(module.settings.Mode.get()=="OLDglide"){mc.thePlayer.motionY=-0.0784}
if(module.settings.Mode.get()=="CUSTOMglide"){mc.thePlayer.motionY=module.settings.motionY_Down.get()
if(!mc.thePlayer.onGround){glideDelay++
if(module.settings.SeeCustomTicks.get()==true){chat.print("§4Tick-Down"+"§7 (Disable SeeCustomTicks to remove this message)")}}
if(glideDelay>=module.settings.GlideTicks.get()&&!mc.thePlayer.onGround){glideDelay=0
mc.thePlayer.motionY=module.settings.motionY_UP.get()/10
if(module.settings.SeeCustomTicks.get()==true){chat.print("§2Tick-UP"+"§7 (Disable SeeCustomTicks to remove this message)")}}}});module.on('disable',function(){mc.timer.timerSpeed=1});});