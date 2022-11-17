/// api_version=2
var LB = Java.type("net.ccbluex.liquidbounce.LiquidBounce");
var a=0;
var asd = 0;
var timer = 3.0;
var script = registerScript({
    name: "Matrix_Disabler",
	version: "6.9.0",
	authors: ["BilalWare"]
	});
	    script.registerModule({
			name: "Matrix_Longjump",
			category: "Movement",
			description: "fly for Matrix",
			settings: {
				autoclose: Setting.boolean({
				name: "AutoClose",
				default: false
			    })

			}
			}, function (module) {
				module.on("motion", function (event) {
					mc.gameSettings.keyBindForward.isKeyDown();
					if(mc.thePlayer.onGround == 1)
				    {
						mc.thePlayer.motionY = 1.4;
						if(mc.gameSettings.keyBindForward.isKeyDown())
						{	
							setSpeedileri(1);
						}
						if(mc.gameSettings.keyBindLeft.isKeyDown())
						{	
							setSpeedsol(1);
						}
						if(mc.gameSettings.keyBindRight.isKeyDown())
						{	
							setSpeedsag(1);
						}
						if(mc.gameSettings.keyBindBack.isKeyDown())
						{	
							setSpeedgeri(1);
						}
				    }
					if(autoclose)
					asd++;
				});
				module.on("enable", function (event) {
					
					asd=0;
				});
				module.on("disable", function (event) {
					mc.timer.timerSpeed = 1;
				});
			
			});
				script.registerModule({
					name: "MatrixPhase",
					category: "Exploit",
					description: "Phase For Matrix"
					}, function (module) {
						module.on("enable", function() {
							LB.commandManager.executeCommands(".phase mode mineplex");
							LB.commandManager.executeCommands(".disabler mode lessflag");
							LB.commandManager.executeCommands(".t disabler");
							LB.commandManager.executeCommands(".t phase");
						});
						module.on("disable", function() {
									LB.commandManager.executeCommands(".t disabler");
									LB.commandManager.executeCommands(".t phase");
									LB.commandManager.executeCommands(".phase mode mineplex");
									LB.commandManager.executeCommands(".disabler mode oldmatrix");
						});
					});
	         var LMA=0;
					script.registerModule({
						name: "Matrix_targetstrafe",
						category: "Movement",
						description: "targerstrafe for Matrix"
						}, 
						function (module) {
							module.on("motion", function (event) {
								LMA++;
								if(LMA % 17 == 0)
								{
									LB.commandManager.executeCommands(".targetstrafe radius " + (Math.floor(Math.random() * 10) + 2)/5);
								}
							});
						});
						script.registerModule({
							name: "Matrix_DTP",
							category: "exploit",
							description: "tp for Matrix"
							}, function (module) {
								
								module.on("packet", function (event) {
						           
									mc.thePlayer.setPosition(mc.thePlayer.posX,mc.thePlayer.posY + 9.25,mc.thePlayer.posZ);
									mc.thePlayer.motionY = 2.5;
									mc.timer.timerSpeed = 0.2;
								});
								module.on("disable", function() 
								{
									mc.timer.timerSpeed = 1;
								});
							});
							var nofall = moduleManager.getModule('nofall')
							script.registerModule({
								name: "matrix_Nofall",
								category: "player",
								description: "nofall for Matrix"
								}, function (module) {
									
									module.on("motion", function (event) {
                                        
										if (mc.thePlayer.motionY < -0.7)
										{
											if(mc.thePlayer.hurtTime > 1 && nofall)
											{
												mc.thePlayer.motionY = -10;
											}
										    nofall.setState(true);
											
									    }
										else
										{
											lol = -0.7;
											nofall.setState(false);
										}
									});
									module.on("disable", function() 
									{
										lol = -1;
										nofall.setState(false);
									});
								});
									var es = 0;
								    var las = 0;
									var ehe = 0;
                                    var cordY = 0.00;
									var fly = moduleManager.getModule('fly')
									var freeze = moduleManager.getModule('freeze')
										script.registerModule({
											name: "Matrix_fly",
											category: "Movement",
											description: "fly for Matrix",
											settings: {
												matrixhor: Setting.float({
													name: "Horizonal",
													default: 1.75,
													min: 0,
													max:3
												}),
												matrixver: Setting.float({
													name: "vertical",
													default: 0.8,
													min: 0,
													max:3
												}),
												motionreset: Setting.boolean({
													name: "Motion Reset",
													default: false
											    })
											}
											}, 
											function (module) {
												module.on("motion", function (event) {
                                                    es++;
													if(es % 10  == 0 && las == 0)
													{
														las = 1;
													}
													/*if (mc.gameSettings.keyBindJump.isKeyDown()) {
														cordY = cordY + 0.1;
													}
													if (mc.gameSettings.keyBindSneak.isKeyDown()) {
														cordY = cordY - 0.1;
													}*/
													if(cordY >= mc.thePlayer.posY && las > 0)
                                                    {
														fly.setState(true);
														//mc.thePlayer.motionY = module.settings.matrixver.get();
														es = 0;
														las = 0;
														ehe++;
													    mc.timer.timerSpeed = 0.2;
														
														/*if(mc.gameSettings.keyBindForward.isKeyDown())
														{	
                                                            setSpeedileri(module.settings.matrixhor.get());
														}
														if(mc.gameSettings.keyBindLeft.isKeyDown())
														{	
                                                            setSpeedsol(module.settings.matrixhor.get());
														}
														if(mc.gameSettings.keyBindRight.isKeyDown())
														{	
                                                            setSpeedsag(module.settings.matrixhor.get());
														}
														if(mc.gameSettings.keyBindBack.isKeyDown())
														{	
                                                            setSpeedgeri(module.settings.matrixhor.get());
														}*/
														
														
													} 
													else if(!fly)//mc.thePlayer.motionY < module.settings.matrixver.get())
													{
                                                        mc.timer.timerSpeed = 1;
													}

												});
												module.on("disable", function() 
									        	{
                                                    mc.timer.timerSpeed = 1;
													ehe = 0;//for onGround
													fly.setState(false);
													
													if(module.settings.autoclose.get())
													{
														matrix_motionreset();
													}
								        		});
												module.on("enable", function() 
									        	{
													ehe = 0;
                                                    cordY = mc.thePlayer.posY;
													es = 0;
													las = 1;
								        		});
											});

									var pltick = 0;
									var fly = moduleManager.getModule('fly')
									var freeze = moduleManager.getModule('freeze')
										script.registerModule({
											name: "Matrix_Speed",
											category: "Movement",
											description: "Speed for Matrix",
											settings: {
												Speed: Setting.float({
													name: "Speed",
													default: 1.5,
													min: 0,
													max: 3
												}),
												Delay: Setting.float({
													name: "Delay",
													default: 15,
													min: 1,
													max:10
												})
											}
											}, 
											function (module) {
												module.on("motion", function (event) {
                                                    pltick++;
													
													if(pltick % module.settings.Delay.get() == 1 || pltick % module.settings.Delay.get() == 2 || pltick % module.settings.Delay.get() == 3 || pltick % module.settings.Delay.get() == 4)
													{
														mc.thePlayer.onGround = 1;
														mc.timer.timerSpeed = 1;
													}
													else
													{
														mc.timer.timerSpeed = 1;
														mc.thePlayer.motionY = -0.2;
														mc.thePlayer.onGround = 0;
													}
													if(pltick % module.settings.Delay.get() == 5)
                                                    {
														mc.timer.timerSpeed = 0.2;
														if(mc.gameSettings.keyBindForward.isKeyDown())
														{	
                                                            setSpeedileri(module.settings.Speed.get());
														}
														if(mc.gameSettings.keyBindLeft.isKeyDown())
														{	
                                                            setSpeedsol(module.settings.Speed.get());
														}
														if(mc.gameSettings.keyBindRightward.isKeyDown())
														{	
                                                            setSpeedsag(module.settings.speed.get());
														}
														if(mc.gameSettings.keyBindBackward.isKeyDown())
														{	
                                                            setSpeedgeri(module.settings.speed.get());
														}
													}
													else if(pltick % module.settings.Delay.get() > 5 || pltick % module.settings.Delay.get() < 14)
													{

													}


												});
												module.on("disable", function() 
									        	{
													fly.setState(false);
													mc.timer.timerSpeed = 1;
													
								        		});
												module.on("enable", function() 
									        	{
													pltick = 0;
								        		});
											});

									
											script.registerModule({
												name: "flagcheck",
												category: "misc",
												description: "",
												}, 
												function (module) {
													
												});

									var plyrtick = 0;
									var checkflag = 0;
									var speedselse = 0;
									var flagcheck = moduleManager.getModule('flagcheck');
									var damage = moduleManager.getModule('damage');
									var blink = moduleManager.getModule('blink');
										script.registerModule({
											name: "MatrixFullFly",
											category: "Movement",
											description: "fly for Matrix",
											settings: {
												Speed: Setting.float({
													name: "Speed",
													default: 1.9,
													min: 0,
													max: 3
												}),
												fakedamage: Setting.boolean({
													name: "Fakedamage",
													default: true
											    }),
												log: Setting.boolean({
													name: "log",
													default: false
											    })
											}
											}, 
											function (module) {
												module.on("motion", function (event) {
                                                    plyrtick++;

													
												    if(flagcheck.state == false)
													{
														checkflag++;
													}

													if(mc.gameSettings.keyBindForward.isKeyDown() && checkflag == 0)
													{	
                                                        setSpeedileri(module.settings.Speed.get());
													}

													if(checkflag == 1)
													{
														blink.setState(true);
														if(module.settings.fakedamage.get() == true)
														{
															
														damage.setState(true);

														}
														speedselse = getSpeed();
														
													}

													if(checkflag > 0)
													{
														if(plyrtick > 30 && speedselse > 0.5)
														{
														    speedselse = (speedselse - 0.015);
														}
														else if(plyrtick > 10 && speedselse > 0.5)
														{
															speedselse = (speedselse - 0.022);
														}
														setSpeedileri(speedselse);
													}

													mc.thePlayer.motionY = 0;


													if(module.settings.log.get() == true)
													{
														Chat.print("moduletick:" + plyrtick);
														Chat.print("flagaftertick:" + checkflag);
													}
												});
												module.on("disable", function() 
									        	{
													blink.setState(false);
													
													flagcheck.setState(false);
													
								        		});
												module.on("enable", function() 
									        	{
													flagcheck.setState(true);
													checkflag = 0;
													plyrtick = 0;
								        		});
											});


											function getSpeed() {
												return Math.sqrt(Math.pow(mc.thePlayer.motionX,2) + Math.pow(mc.thePlayer.motionZ,2))
											}

											function setSpeedileri(_speed) {
												var playerYaw = Math.radians(mc.thePlayer.rotationYaw);
												mc.thePlayer.motionX = _speed * -Math.sin(playerYaw);
												mc.thePlayer.motionZ = _speed * Math.cos(playerYaw);
											}
											function setSpeedgeri(_speed) {
												var playerYaw = Math.radians(mc.thePlayer.rotationYaw - 180);
												mc.thePlayer.motionX = _speed * -Math.sin(playerYaw);
												mc.thePlayer.motionZ = _speed * Math.cos(playerYaw);
											}
											function setSpeedsag(_speed) {
												var playerYaw = Math.radians(mc.thePlayer.rotationYaw + 90);
												mc.thePlayer.motionX = _speed * -Math.sin(playerYaw);
												mc.thePlayer.motionZ = _speed * Math.cos(playerYaw);
											}
											function setSpeedsol(_speed) {
												var playerYaw = Math.radians(mc.thePlayer.rotationYaw - 90);
												mc.thePlayer.motionX = _speed * -Math.sin(playerYaw);
												mc.thePlayer.motionZ = _speed * Math.cos(playerYaw);
											}

											Math.radians = function(degrees) {
												return degrees * Math.PI / 180;
											};
											function matrix_motionreset() {
												mc.thePlayer.motionZ = 0;
												mc.thePlayer.motionX = 0;
											}