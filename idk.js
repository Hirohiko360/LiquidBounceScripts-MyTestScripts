var script=registerScript({name:'HypikleVelo',version:'2.0',authors:['nvinci']});var S27=Java.type("net.minecraft.network.play.server.S27PacketExplosion");var S12=Java.type("net.minecraft.network.play.server.S12PacketEntityVelocity");script.registerModule({name:'HypikleVelo',category:'Combat',description:'fixed version',settings:{horizontal:Setting.float({name:"Horizontal",default:100.0,min:0.0,max:100.0}),vertical:Setting.float({name:"Vertical",default:100.0,min:0.0,max:100.0}),chance:Setting.float({name:"Chance",default:50.0,min:0.0,max:100.0}),only_while_targeting:Setting.boolean({name:"Only While Targeting",default:false})}},function(module){module.on('packet',function(e){try{var chance_rand=Math.random()*100.0;if(chance_rand>module.settings.chance.get())return;if(mc.objectMouseOver!=null&&(mc.objectMouseOver.entityHit==null&&module.settings.only_while_targeting.get()))return;if(e.getPacket()instanceof S12){var packet=e.getPacket();packet.motionX*=module.settings.horizontal.get()/100.0;packet.motionY*=module.settings.vertical.get()/100.0;packet.motionZ*=module.settings.horizontal.get()/100.0;}else if(e.getPacket()instanceof S27){var packet=e.getPacket();var motionX_fid=packet.class.getDeclaredField("field_149152_f");var motionY_fid=packet.class.getDeclaredField("field_149153_g");var motionZ_fid=packet.class.getDeclaredField("field_149159_h");motionX_fid.setAccessible(true);motionY_fid.setAccessible(true);motionZ_fid.setAccessible(true);motionX_fid.setFloat(packet,motionX_fid.get(packet)*(module.settings.horizontal.get()/100.0));motionY_fid.setFloat(packet,motionY_fid.get(packet)*(module.settings.vertical.get()/100.0));motionZ_fid.setFloat(packet,motionZ_fid.get(packet)*(module.settings.horizontal.get()/100.0));motionX_fid.setAccessible(false);motionY_fid.setAccessible(false);motionZ_fid.setAccessible(false);}}catch(err){Chat.print(err);};});});