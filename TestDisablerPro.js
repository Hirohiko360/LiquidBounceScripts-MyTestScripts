///engine_flags=--language=es6
var scriptName = "TestDisablerPro";
var scriptVersion = 1.0;
var scriptAuthor = "yby360";

var C00Handshake = Java.type("net.minecraft.network.handshake.client.C00Handshake");
var C00PacketKeepAlive = Java.type("net.minecraft.network.play.client.C00PacketKeepAlive");
var C00PacketLoginStart = Java.type("net.minecraft.network.login.client.C00PacketLoginStart");
var C00PacketServerQuery = Java.type("net.minecraft.network.status.client.C00PacketServerQuery");
var C01PacketChatMessage = Java.type("net.minecraft.network.play.client.C01PacketChatMessage");
var C01PacketEncryptionResponse = Java.type("net.minecraft.network.login.client.C01PacketEncryptionResponse");
var C01PacketPing = Java.type("net.minecraft.network.status.client.C01PacketPing");
var C02PacketUseEntity = Java.type("net.minecraft.network.play.client.C02PacketUseEntity");
var C03PacketPlayer = Java.type("net.minecraft.network.play.client.C03PacketPlayer");
var C04PacketPlayerPosition = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition");
var C05PacketPlayerLook = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook");
var C06PacketPlayerPosLook = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook");
var C07PacketPlayerDigging = Java.type("net.minecraft.network.play.client.C07PacketPlayerDigging");
var C08PacketPlayerBlockPlacement = Java.type("net.minecraft.network.play.client.C08PacketPlayerBlockPlacement");
var C09PacketHeldItemChange = Java.type("net.minecraft.network.play.client.C09PacketHeldItemChange");
var C0APacketAnimation = Java.type("net.minecraft.network.play.client.C0APacketAnimation");
var C0BPacketEntityAction = Java.type("net.minecraft.network.play.client.C0BPacketEntityAction");
var C0CPacketInput = Java.type("net.minecraft.network.play.client.C0CPacketInput");
var C0DPacketCloseWindow = Java.type("net.minecraft.network.play.client.C0DPacketCloseWindow");
var C0EPacketClickWindow = Java.type("net.minecraft.network.play.client.C0EPacketClickWindow");
var C0FPacketConfirmTransaction = Java.type("net.minecraft.network.play.client.C0FPacketConfirmTransaction");
var C10PacketCreativeInventoryAction = Java.type("net.minecraft.network.play.client.C10PacketCreativeInventoryAction");
var C11PacketEnchantItem = Java.type("net.minecraft.network.play.client.C11PacketEnchantItem");
var C12PacketUpdateSign = Java.type("net.minecraft.network.play.client.C12PacketUpdateSign");
var C13PacketPlayerAbilities = Java.type("net.minecraft.network.play.client.C13PacketPlayerAbilities");
var C14PacketTabComplete = Java.type("net.minecraft.network.play.client.C14PacketTabComplete");
var C15PacketClientSettings = Java.type("net.minecraft.network.play.client.C15PacketClientSettings");
var C16PacketClientStatus = Java.type("net.minecraft.network.play.client.C16PacketClientStatus");
var C17PacketCustomPayload = Java.type("net.minecraft.network.play.client.C17PacketCustomPayload");
var C18PacketSpectate = Java.type("net.minecraft.network.play.client.C18PacketSpectate");
var C19PacketResourcePackStatus = Java.type("net.minecraft.network.play.client.C19PacketResourcePackStatus");
var S00PacketDisconnect = Java.type("net.minecraft.network.login.server.S00PacketDisconnect");
var S00PacketKeepAlive = Java.type("net.minecraft.network.play.server.S00PacketKeepAlive");
var S00PacketServerInfo = Java.type("net.minecraft.network.status.server.S00PacketServerInfo");
var S01PacketEncryptionRequest = Java.type("net.minecraft.network.login.server.S01PacketEncryptionRequest");
var S01PacketJoinGame = Java.type("net.minecraft.network.play.server.S01PacketJoinGame");
var S01PacketPong = Java.type("net.minecraft.network.status.server.S01PacketPong");
var S02PacketChat = Java.type("net.minecraft.network.play.server.S02PacketChat");
var S02PacketLoginSuccess = Java.type("net.minecraft.network.login.server.S02PacketLoginSuccess");
var S03PacketEnableCompression = Java.type("net.minecraft.network.login.server.S03PacketEnableCompression");
var S03PacketTimeUpdate = Java.type("net.minecraft.network.play.server.S03PacketTimeUpdate");
var S04PacketEntityEquipment = Java.type("net.minecraft.network.play.server.S04PacketEntityEquipment");
var S05PacketSpawnPosition = Java.type("net.minecraft.network.play.server.S05PacketSpawnPosition");
var S06PacketUpdateHealth = Java.type("net.minecraft.network.play.server.S06PacketUpdateHealth");
var S07PacketRespawn = Java.type("net.minecraft.network.play.server.S07PacketRespawn");
var S08PacketPlayerPosLook = Java.type("net.minecraft.network.play.server.S08PacketPlayerPosLook");
var S09PacketHeldItemChange = Java.type("net.minecraft.network.play.server.S09PacketHeldItemChange");
var S0APacketUseBed = Java.type("net.minecraft.network.play.server.S0APacketUseBed");
var S0BPacketAnimation = Java.type("net.minecraft.network.play.server.S0BPacketAnimation");
var S0CPacketSpawnPlayer = Java.type("net.minecraft.network.play.server.S0CPacketSpawnPlayer");
var S0DPacketCollectItem = Java.type("net.minecraft.network.play.server.S0DPacketCollectItem");
var S0EPacketSpawnObject = Java.type("net.minecraft.network.play.server.S0EPacketSpawnObject");
var S0FPacketSpawnMob = Java.type("net.minecraft.network.play.server.S0FPacketSpawnMob");
var S10PacketSpawnPainting = Java.type("net.minecraft.network.play.server.S10PacketSpawnPainting");
var S11PacketSpawnExperienceOrb = Java.type("net.minecraft.network.play.server.S11PacketSpawnExperienceOrb");
var S12PacketEntityVelocity = Java.type("net.minecraft.network.play.server.S12PacketEntityVelocity");
var S13PacketDestroyEntities = Java.type("net.minecraft.network.play.server.S13PacketDestroyEntities");
var S14PacketEntity = Java.type("net.minecraft.network.play.server.S14PacketEntity");
var S15PacketEntityRelMove = Java.type("net.minecraft.network.play.server.S14PacketEntity.S15PacketEntityRelMove");
var S16PacketEntityLook = Java.type("net.minecraft.network.play.server.S14PacketEntity.S16PacketEntityLook");
var S17PacketEntityLookMove = Java.type("net.minecraft.network.play.server.S14PacketEntity.S17PacketEntityLookMove");
var S18PacketEntityTeleport = Java.type("net.minecraft.network.play.server.S18PacketEntityTeleport");
var S19PacketEntityHeadLook = Java.type("net.minecraft.network.play.server.S19PacketEntityHeadLook");
var S19PacketEntityStatus = Java.type("net.minecraft.network.play.server.S19PacketEntityStatus");
var S1BPacketEntityAttach = Java.type("net.minecraft.network.play.server.S1BPacketEntityAttach");
var S1CPacketEntityMetadata = Java.type("net.minecraft.network.play.server.S1CPacketEntityMetadata");
var S1DPacketEntityEffect = Java.type("net.minecraft.network.play.server.S1DPacketEntityEffect");
var S1EPacketRemoveEntityEffect = Java.type("net.minecraft.network.play.server.S1EPacketRemoveEntityEffect");
var S1FPacketSetExperience = Java.type("net.minecraft.network.play.server.S1FPacketSetExperience");
var S20PacketEntityProperties = Java.type("net.minecraft.network.play.server.S20PacketEntityProperties");
var S21PacketChunkData = Java.type("net.minecraft.network.play.server.S21PacketChunkData");
var S22PacketMultiBlockChange = Java.type("net.minecraft.network.play.server.S22PacketMultiBlockChange");
var S23PacketBlockChange = Java.type("net.minecraft.network.play.server.S23PacketBlockChange");
var S24PacketBlockAction = Java.type("net.minecraft.network.play.server.S24PacketBlockAction");
var S25PacketBlockBreakAnim = Java.type("net.minecraft.network.play.server.S25PacketBlockBreakAnim");
var S26PacketMapChunkBulk = Java.type("net.minecraft.network.play.server.S26PacketMapChunkBulk");
var S27PacketExplosion = Java.type("net.minecraft.network.play.server.S27PacketExplosion");
var S28PacketEffect = Java.type("net.minecraft.network.play.server.S28PacketEffect");
var S29PacketSoundEffect = Java.type("net.minecraft.network.play.server.S29PacketSoundEffect");
var S2APacketParticles = Java.type("net.minecraft.network.play.server.S2APacketParticles");
var S2BPacketChangeGameState = Java.type("net.minecraft.network.play.server.S2BPacketChangeGameState");
var S2CPacketSpawnGlobalEntity = Java.type("net.minecraft.network.play.server.S2CPacketSpawnGlobalEntity");
var S2DPacketOpenWindow = Java.type("net.minecraft.network.play.server.S2DPacketOpenWindow");
var S2EPacketCloseWindow = Java.type("net.minecraft.network.play.server.S2EPacketCloseWindow");
var S2FPacketSetSlot = Java.type("net.minecraft.network.play.server.S2FPacketSetSlot");
var S30PacketWindowItems = Java.type("net.minecraft.network.play.server.S30PacketWindowItems");
var S31PacketWindowProperty = Java.type("net.minecraft.network.play.server.S31PacketWindowProperty");
var S32PacketConfirmTransaction = Java.type("net.minecraft.network.play.server.S32PacketConfirmTransaction");
var S33PacketUpdateSign = Java.type("net.minecraft.network.play.server.S33PacketUpdateSign");
var S34PacketMaps = Java.type("net.minecraft.network.play.server.S34PacketMaps");
var S35PacketUpdateTileEntity = Java.type("net.minecraft.network.play.server.S35PacketUpdateTileEntity");
var S36PacketSignEditorOpen = Java.type("net.minecraft.network.play.server.S36PacketSignEditorOpen");
var S37PacketStatistics = Java.type("net.minecraft.network.play.server.S37PacketStatistics");
var S38PacketPlayerListItem = Java.type("net.minecraft.network.play.server.S38PacketPlayerListItem");
var S39PacketPlayerAbilities = Java.type("net.minecraft.network.play.server.S39PacketPlayerAbilities");
var S3APacketTabComplete = Java.type("net.minecraft.network.play.server.S3APacketTabComplete");
var S3BPacketScoreboardObjective = Java.type("net.minecraft.network.play.server.S3BPacketScoreboardObjective");
var S3CPacketUpdateScore = Java.type("net.minecraft.network.play.server.S3CPacketUpdateScore");
var S3DPacketDisplayScoreboard = Java.type("net.minecraft.network.play.server.S3DPacketDisplayScoreboard");
var S3EPacketTeams = Java.type("net.minecraft.network.play.server.S3EPacketTeams");
var S3FPacketCustomPayload = Java.type("net.minecraft.network.play.server.S3FPacketCustomPayload");
var S40PacketDisconnect = Java.type("net.minecraft.network.play.server.S40PacketDisconnect");
var S41PacketServerDifficulty = Java.type("net.minecraft.network.play.server.S41PacketServerDifficulty");
var S42PacketCombatEvent = Java.type("net.minecraft.network.play.server.S42PacketCombatEvent");
var S43PacketCamera = Java.type("net.minecraft.network.play.server.S43PacketCamera");
var S44PacketWorldBorder = Java.type("net.minecraft.network.play.server.S44PacketWorldBorder");
var S45PacketTitle = Java.type("net.minecraft.network.play.server.S45PacketTitle");
var S46PacketSetCompressionLevel = Java.type("net.minecraft.network.play.server.S46PacketSetCompressionLevel");
var S47PacketPlayerListHeaderFooter = Java.type("net.minecraft.network.play.server.S47PacketPlayerListHeaderFooter");
var S48PacketResourcePackSend = Java.type("net.minecraft.network.play.server.S48PacketResourcePackSend");
var S49PacketUpdateEntityNBT = Java.type("net.minecraft.network.play.server.S49PacketUpdateEntityNBT");
var PacketBuffer = Java.type ("net.minecraft.network.PacketBuffer");

var JOptionPane = Java.type("javax.swing.JOptionPane");

// Classification List
var listshowchoose = ["按钮(push-button)", "列表(tabulation)"];
var choose = ["World", "Fun", "Movement", "Render", "Combat", "Player", "Misc", "Exploit", "自定义(Custom)"];

var listshowset = JOptionPane.showOptionDialog(null,"请选择展示形式(Please select a presentation form)：","形式选择(Presentation form)",JOptionPane.YES_NO_OPTION,JOptionPane.QUESTION_MESSAGE,null,listshowchoose,listshowchoose[0]);
var listshow = listshowchoose[listshowset]

if(listshow == "按钮(push-button)") {
	var chooseset = JOptionPane.showOptionDialog(null,"请选择分类(Please select a classification)：","分类(classify)",JOptionPane.YES_NO_OPTION,JOptionPane.QUESTION_MESSAGE,null,choose,choose[0]);
	var chooselist = choose[chooseset]
		if(chooselist == "自定义(Custom)") {
			var chooselist = JOptionPane.showInputDialog(null,"请输入自定义名称(Please enter a custom name)：","请首字母大写(The first letter should be capitalized)",JOptionPane.WARNING_MESSAGE);	
				}
					}else{
						var chooselist = JOptionPane.showInputDialog(null,"请选择分类(Please select a classification)：","分类(classify)",JOptionPane.QUESTION_MESSAGE,null,choose,choose[0]);	
							if(chooselist == "自定义(Custom)") {
								var chooselist = JOptionPane.showInputDialog(null,"请输入自定义名称(Please enter a custom name)：","请首字母大写(The first letter should be capitalized)",JOptionPane.WARNING_MESSAGE);
							}
						}

function add2() {

	var setting = {
		float: function (name, def, min, max) {
			return value.createFloat(name, def, min, max);
		},
		integer: function (name, def, min, max) {
			return value.createInteger(name, def, min, max);
		},
		boolean: function (name, def) {
			return value.createBoolean(name, def);
		},
		list: function (name, values, def) {
			return value.createList(name, values, def);
		}
	};

	var settings = {
 C00Handshake: setting.boolean("C00Handshake", false),
 C00PacketKeepAlive: setting.boolean("C00PacketKeepAlive", false),
 C00PacketLoginStart: setting.boolean("C00PacketLoginStart", false),
 C00PacketServerQuery: setting.boolean("C00PacketServerQuery", false),
 C01PacketChatMessage: setting.boolean("C01PacketChatMessage", false),
 C01PacketEncryptionResponse: setting.boolean("C01PacketEncryptionResponse", false),
 C01PacketPing: setting.boolean("C01PacketPing", false),
 C02PacketUseEntity: setting.boolean("C02PacketUseEntity", false),
 C03PacketPlayer: setting.boolean("C03PacketPlayer", false),
 C04PacketPlayerPosition: setting.boolean("C04PacketPlayerPosition", false),
 C05PacketPlayerLook: setting.boolean("C05PacketPlayerLook", false),
 C06PacketPlayerPosLook: setting.boolean("C06PacketPlayerPosLook", false),
 C07PacketPlayerDigging: setting.boolean("C07PacketPlayerDigging", false),
 C08PacketPlayerBlockPlacement: setting.boolean("C08PacketPlayerBlockPlacement", false),
 C09PacketHeldItemChange: setting.boolean("C09PacketHeldItemChange", false),
 C0APacketAnimation: setting.boolean("C0APacketAnimation", false),
 C0BPacketEntityAction: setting.boolean("C0BPacketEntityAction", false),
 C0CPacketInput: setting.boolean("C0CPacketInput", false),
 C0DPacketCloseWindow: setting.boolean("C0DPacketCloseWindow", false),
 C0EPacketClickWindow: setting.boolean("C0EPacketClickWindow", false),
 C0FPacketConfirmTransaction: setting.boolean("C0FPacketConfirmTransaction", false),
 C10PacketCreativeInventoryAction: setting.boolean("C10PacketCreativeInventoryAction", false),
 C11PacketEnchantItem: setting.boolean("C11PacketEnchantItem", false),
 C12PacketUpdateSign: setting.boolean("C12PacketUpdateSign", false),
 C13PacketPlayerAbilities: setting.boolean("C13PacketPlayerAbilities", false),
 C14PacketTabComplete: setting.boolean("C14PacketTabComplete", false),
 C15PacketClientSettings: setting.boolean("C15PacketClientSettings", false),
 C16PacketClientStatus: setting.boolean("C16PacketClientStatus", false),
 C17PacketCustomPayload: setting.boolean("C17PacketCustomPayload", false),
 C18PacketSpectate: setting.boolean("C18PacketSpectate", false),
 C19PacketResourcePackStatus: setting.boolean("C19PacketResourcePackStatus", false),
 S00PacketDisconnect: setting.boolean("S00PacketDisconnect", false),
 S00PacketKeepAlive: setting.boolean("S00PacketKeepAlive", false),
 S00PacketServerInfo: setting.boolean("S00PacketServerInfo", false),
 S01PacketEncryptionRequest: setting.boolean("S01PacketEncryptionRequest", false),
 S01PacketJoinGame: setting.boolean("S01PacketJoinGame", false),
 S01PacketPong: setting.boolean("S01PacketPong", false),
 S02PacketChat: setting.boolean("S02PacketChat", false),
 S02PacketLoginSuccess: setting.boolean("S02PacketLoginSuccess", false),
 S03PacketEnableCompression: setting.boolean("S03PacketEnableCompression", false),
 S03PacketTimeUpdate: setting.boolean("S03PacketTimeUpdate", false),
 S04PacketEntityEquipment: setting.boolean("S04PacketEntityEquipment", false),
 S05PacketSpawnPosition: setting.boolean("S05PacketSpawnPosition", false),
 S06PacketUpdateHealth: setting.boolean("S06PacketUpdateHealth", false),
 S07PacketRespawn: setting.boolean("S07PacketRespawn", false),
 S08PacketPlayerPosLook: setting.boolean("S08PacketPlayerPosLook", false),
 S09PacketHeldItemChange: setting.boolean("S09PacketHeldItemChange", false),
 S0APacketUseBed: setting.boolean("S0APacketUseBed", false),
 S0BPacketAnimation: setting.boolean("S0BPacketAnimation", false),
 S0CPacketSpawnPlayer: setting.boolean("S0CPacketSpawnPlayer", false),
 S0DPacketCollectItem: setting.boolean("S0DPacketCollectItem", false),
 S0EPacketSpawnObject: setting.boolean("S0EPacketSpawnObject", false),
 S0FPacketSpawnMob: setting.boolean("S0FPacketSpawnMob", false),
 S10PacketSpawnPainting: setting.boolean("S10PacketSpawnPainting", false),
 S11PacketSpawnExperienceOrb: setting.boolean("S11PacketSpawnExperienceOrb", false),
 S12PacketEntityVelocity: setting.boolean("S12PacketEntityVelocity", false),
 S13PacketDestroyEntities: setting.boolean("S13PacketDestroyEntities", false),
 S14PacketEntity: setting.boolean("S14PacketEntity", false),
 S15PacketEntityRelMove: setting.boolean("S15PacketEntityRelMove", false),
 S16PacketEntityLook: setting.boolean("S16PacketEntityLook", false),
 S17PacketEntityLookMove: setting.boolean("S17PacketEntityLookMove", false),
 S18PacketEntityTeleport: setting.boolean("S18PacketEntityTeleport", false),
 S19PacketEntityHeadLook: setting.boolean("S19PacketEntityHeadLook", false),
 S19PacketEntityStatus: setting.boolean("S19PacketEntityStatus", false),
 S1BPacketEntityAttach: setting.boolean("S1BPacketEntityAttach", false),
 S1CPacketEntityMetadata: setting.boolean("S1CPacketEntityMetadata", false),
 S1DPacketEntityEffect: setting.boolean("S1DPacketEntityEffect", false),
 S1EPacketRemoveEntityEffect: setting.boolean("S1EPacketRemoveEntityEffect", false),
 S1FPacketSetExperience: setting.boolean("S1FPacketSetExperience", false),
 S20PacketEntityProperties: setting.boolean("S20PacketEntityProperties", false),
 S21PacketChunkData: setting.boolean("S21PacketChunkData", false),
 S22PacketMultiBlockChange: setting.boolean("S22PacketMultiBlockChange", false),
 S23PacketBlockChange: setting.boolean("S23PacketBlockChange", false),
 S24PacketBlockAction: setting.boolean("S24PacketBlockAction", false),
 S25PacketBlockBreakAnim: setting.boolean("S25PacketBlockBreakAnim", false),
 S26PacketMapChunkBulk: setting.boolean("S26PacketMapChunkBulk", false),
 S27PacketExplosion: setting.boolean("S27PacketExplosion", false),
 S28PacketEffect: setting.boolean("S28PacketEffect", false),
 S29PacketSoundEffect: setting.boolean("S29PacketSoundEffect", false),
 S2APacketParticles: setting.boolean("S2APacketParticles", false),
 S2BPacketChangeGameState: setting.boolean("S2BPacketChangeGameState", false),
 S2CPacketSpawnGlobalEntity: setting.boolean("S2CPacketSpawnGlobalEntity", false),
 S2DPacketOpenWindow: setting.boolean("S2DPacketOpenWindow", false),
 S2EPacketCloseWindow: setting.boolean("S2EPacketCloseWindow", false),
 S2FPacketSetSlot: setting.boolean("S2FPacketSetSlot", false),
 S30PacketWindowItems: setting.boolean("S30PacketWindowItems", false),
 S31PacketWindowProperty: setting.boolean("S31PacketWindowProperty", false),
 S32PacketConfirmTransaction: setting.boolean("S32PacketConfirmTransaction", false),
 S33PacketUpdateSign: setting.boolean("S33PacketUpdateSign", false),
 S34PacketMaps: setting.boolean("S34PacketMaps", false),
 S35PacketUpdateTileEntity: setting.boolean("S35PacketUpdateTileEntity", false),
 S36PacketSignEditorOpen: setting.boolean("S36PacketSignEditorOpen", false),
 S37PacketStatistics: setting.boolean("S37PacketStatistics", false),
 S38PacketPlayerListItem: setting.boolean("S38PacketPlayerListItem", false),
 S39PacketPlayerAbilities: setting.boolean("S39PacketPlayerAbilities", false),
 S3APacketTabComplete: setting.boolean("S3APacketTabComplete", false),
 S3BPacketScoreboardObjective: setting.boolean("S3BPacketScoreboardObjective", false),
 S3CPacketUpdateScore: setting.boolean("S3CPacketUpdateScore", false),
 S3DPacketDisplayScoreboard: setting.boolean("S3DPacketDisplayScoreboard", false),
 S3EPacketTeams: setting.boolean("S3EPacketTeams", false),
 S3FPacketCustomPayload: setting.boolean("S3FPacketCustomPayload", false),
 S40PacketDisconnect: setting.boolean("S40PacketDisconnect", false),
 S41PacketServerDifficulty: setting.boolean("S41PacketServerDifficulty", false),
 S42PacketCombatEvent: setting.boolean("S42PacketCombatEvent", false),
 S43PacketCamera: setting.boolean("S43PacketCamera", false),
 S44PacketWorldBorder: setting.boolean("S44PacketWorldBorder", false),
 S45PacketTitle: setting.boolean("S45PacketTitle", false),
 S46PacketSetCompressionLevel: setting.boolean("S46PacketSetCompressionLevel", false),
 S47PacketPlayerListHeaderFooter: setting.boolean("S47PacketPlayerListHeaderFooter", false),
 S48PacketResourcePackSend: setting.boolean("S48PacketResourcePackSend", false),
 S49PacketUpdateEntityNBT: setting.boolean("S49PacketUpdateEntityNBT", false),	
 PacketBuffer: setting.boolean("PacketBuffer", false),
		 };
    this.getName = function() {
        return "TestDisablerPro";
    };
	
    this.getDescription = function() {
        return "TestDisablerPro";
    };
	
    this.getCategory = function() {
        return chooselist;
	};
	
	this.onEnable = function() {
	}
	
	this.onUpdate = function() {
	}
	
	this.onDisable = function() {
	}
	
	this.onPacket = function (event) {
        var packet = event.getPacket();
		if ((packet instanceof  C00Handshake && settings.C00Handshake.get()) ||
			(packet instanceof  C00PacketKeepAlive && settings.C00PacketKeepAlive.get()) ||
			(packet instanceof  C00PacketLoginStart && settings.C00PacketLoginStart.get()) ||
			(packet instanceof  C00PacketServerQuery && settings.C00PacketServerQuery.get()) ||
			(packet instanceof  C01PacketChatMessage && settings.C01PacketChatMessage.get()) ||
			(packet instanceof  C01PacketEncryptionResponse && settings.C01PacketEncryptionResponse.get()) ||
			(packet instanceof  C01PacketPing && settings.C01PacketPing.get()) ||
			(packet instanceof  C02PacketUseEntity && settings.C02PacketUseEntity.get()) ||
			(packet instanceof  C03PacketPlayer && settings.C03PacketPlayer.get()) ||
			(packet instanceof  C04PacketPlayerPosition && settings.C04PacketPlayerPosition.get()) ||
			(packet instanceof  C05PacketPlayerLook && settings.C05PacketPlayerLook.get()) ||
			(packet instanceof  C06PacketPlayerPosLook && settings.C06PacketPlayerPosLook.get()) ||
			(packet instanceof  C07PacketPlayerDigging && settings.C07PacketPlayerDigging.get()) ||
			(packet instanceof  C08PacketPlayerBlockPlacement && settings.C08PacketPlayerBlockPlacement.get()) ||
			(packet instanceof  C09PacketHeldItemChange && settings.C09PacketHeldItemChange.get()) ||
			(packet instanceof  C0APacketAnimation && settings.C0APacketAnimation.get()) ||
			(packet instanceof  C0BPacketEntityAction && settings.C0BPacketEntityAction.get()) ||
			(packet instanceof  C0CPacketInput && settings.C0CPacketInput.get()) ||
			(packet instanceof  C0DPacketCloseWindow && settings.C0DPacketCloseWindow.get()) ||
			(packet instanceof  C0EPacketClickWindow && settings.C0EPacketClickWindow.get()) ||
			(packet instanceof  C0FPacketConfirmTransaction && settings.C0FPacketConfirmTransaction.get()) ||
			(packet instanceof  C10PacketCreativeInventoryAction && settings.C10PacketCreativeInventoryAction.get()) ||
			(packet instanceof  C11PacketEnchantItem && settings.C11PacketEnchantItem.get()) ||
			(packet instanceof  C12PacketUpdateSign && settings.C12PacketUpdateSign.get()) ||
			(packet instanceof  C13PacketPlayerAbilities && settings.C13PacketPlayerAbilities.get()) ||
			(packet instanceof  C14PacketTabComplete && settings.C14PacketTabComplete.get()) ||
			(packet instanceof  C15PacketClientSettings && settings.C15PacketClientSettings.get()) ||
			(packet instanceof  C16PacketClientStatus && settings.C16PacketClientStatus.get()) ||
			(packet instanceof  C17PacketCustomPayload && settings.C17PacketCustomPayload.get()) ||
			(packet instanceof  C18PacketSpectate && settings.C18PacketSpectate.get()) ||
			(packet instanceof  C19PacketResourcePackStatus && settings.C19PacketResourcePackStatus.get()) ||
			(packet instanceof  S00PacketDisconnect && settings.S00PacketDisconnect.get()) ||
			(packet instanceof  S00PacketKeepAlive && settings.S00PacketKeepAlive.get()) ||
			(packet instanceof  S00PacketServerInfo && settings.S00PacketServerInfo.get()) ||
			(packet instanceof  S01PacketEncryptionRequest && settings.S01PacketEncryptionRequest.get()) ||
			(packet instanceof  S01PacketJoinGame && settings.S01PacketJoinGame.get()) ||
			(packet instanceof  S01PacketPong && settings.S01PacketPong.get()) ||
			(packet instanceof  S02PacketChat && settings.S02PacketChat.get()) ||
			(packet instanceof  S02PacketLoginSuccess && settings.S02PacketLoginSuccess.get()) ||
			(packet instanceof  S03PacketEnableCompression && settings.S03PacketEnableCompression.get()) ||
			(packet instanceof  S03PacketTimeUpdate && settings.S03PacketTimeUpdate.get()) ||
			(packet instanceof  S04PacketEntityEquipment && settings.S04PacketEntityEquipment.get()) ||
			(packet instanceof  S05PacketSpawnPosition && settings.S05PacketSpawnPosition.get()) ||
			(packet instanceof  S06PacketUpdateHealth && settings.S06PacketUpdateHealth.get()) ||
			(packet instanceof  S07PacketRespawn && settings.S07PacketRespawn.get()) ||
			(packet instanceof  S08PacketPlayerPosLook && settings.S08PacketPlayerPosLook.get()) ||
			(packet instanceof  S09PacketHeldItemChange && settings.S09PacketHeldItemChange.get()) ||
			(packet instanceof  S0APacketUseBed && settings.S0APacketUseBed.get()) ||
			(packet instanceof  S0BPacketAnimation && settings.S0BPacketAnimation.get()) ||
			(packet instanceof  S0CPacketSpawnPlayer && settings.S0CPacketSpawnPlayer.get()) ||
			(packet instanceof  S0DPacketCollectItem && settings.S0DPacketCollectItem.get()) ||
			(packet instanceof  S0EPacketSpawnObject && settings.S0EPacketSpawnObject.get()) ||
			(packet instanceof  S0FPacketSpawnMob && settings.S0FPacketSpawnMob.get()) ||
			(packet instanceof  S10PacketSpawnPainting && settings.S10PacketSpawnPainting.get()) ||
			(packet instanceof  S11PacketSpawnExperienceOrb && settings.S11PacketSpawnExperienceOrb.get()) ||
			(packet instanceof  S12PacketEntityVelocity && settings.S12PacketEntityVelocity.get()) ||
			(packet instanceof  S13PacketDestroyEntities && settings.S13PacketDestroyEntities.get()) ||
			(packet instanceof  S14PacketEntity && settings.S14PacketEntity.get()) ||
			(packet instanceof  S15PacketEntityRelMove && settings.S15PacketEntityRelMove.get()) ||
			(packet instanceof  S16PacketEntityLook && settings.S16PacketEntityLook.get()) ||
			(packet instanceof  S17PacketEntityLookMove && settings.S17PacketEntityLookMove.get()) ||
			(packet instanceof  S18PacketEntityTeleport && settings.S18PacketEntityTeleport.get()) ||
			(packet instanceof  S19PacketEntityHeadLook && settings.S19PacketEntityHeadLook.get()) ||
			(packet instanceof  S19PacketEntityStatus && settings.S19PacketEntityStatus.get()) ||
			(packet instanceof  S1BPacketEntityAttach && settings.S1BPacketEntityAttach.get()) ||
			(packet instanceof  S1CPacketEntityMetadata && settings.S1CPacketEntityMetadata.get()) ||
			(packet instanceof  S1DPacketEntityEffect && settings.S1DPacketEntityEffect.get()) ||
			(packet instanceof  S1EPacketRemoveEntityEffect && settings.S1EPacketRemoveEntityEffect.get()) ||
			(packet instanceof  S1FPacketSetExperience && settings.S1FPacketSetExperience.get()) ||
			(packet instanceof  S20PacketEntityProperties && settings.S20PacketEntityProperties.get()) ||
			(packet instanceof  S21PacketChunkData && settings.S21PacketChunkData.get()) ||
			(packet instanceof  S22PacketMultiBlockChange && settings.S22PacketMultiBlockChange.get()) ||
			(packet instanceof  S23PacketBlockChange && settings.S23PacketBlockChange.get()) ||
			(packet instanceof  S24PacketBlockAction && settings.S24PacketBlockAction.get()) ||
			(packet instanceof  S25PacketBlockBreakAnim && settings.S25PacketBlockBreakAnim.get()) ||
			(packet instanceof  S26PacketMapChunkBulk && settings.S26PacketMapChunkBulk.get()) ||
			(packet instanceof  S27PacketExplosion && settings.S27PacketExplosion.get()) ||
			(packet instanceof  S28PacketEffect && settings.S28PacketEffect.get()) ||
			(packet instanceof  S29PacketSoundEffect && settings.S29PacketSoundEffect.get()) ||
			(packet instanceof  S2APacketParticles && settings.S2APacketParticles.get()) ||
			(packet instanceof  S2BPacketChangeGameState && settings.S2BPacketChangeGameState.get()) ||
			(packet instanceof  S2CPacketSpawnGlobalEntity && settings.S2CPacketSpawnGlobalEntity.get()) ||
			(packet instanceof  S2DPacketOpenWindow && settings.S2DPacketOpenWindow.get()) ||
			(packet instanceof  S2EPacketCloseWindow && settings.S2EPacketCloseWindow.get()) ||
			(packet instanceof  S2FPacketSetSlot && settings.S2FPacketSetSlot.get()) ||
			(packet instanceof  S30PacketWindowItems && settings.S30PacketWindowItems.get()) ||
			(packet instanceof  S31PacketWindowProperty && settings.S31PacketWindowProperty.get()) ||
			(packet instanceof  S32PacketConfirmTransaction && settings.S32PacketConfirmTransaction.get()) ||
			(packet instanceof  S33PacketUpdateSign && settings.S33PacketUpdateSign.get()) ||
			(packet instanceof  S34PacketMaps && settings.S34PacketMaps.get()) ||
			(packet instanceof  S35PacketUpdateTileEntity && settings.S35PacketUpdateTileEntity.get()) ||
			(packet instanceof  S36PacketSignEditorOpen && settings.S36PacketSignEditorOpen.get()) ||
			(packet instanceof  S37PacketStatistics && settings.S37PacketStatistics.get()) ||
			(packet instanceof  S38PacketPlayerListItem && settings.S38PacketPlayerListItem.get()) ||
			(packet instanceof  S39PacketPlayerAbilities && settings.S39PacketPlayerAbilities.get()) ||
			(packet instanceof  S3APacketTabComplete && settings.S3APacketTabComplete.get()) ||
			(packet instanceof  S3BPacketScoreboardObjective && settings.S3BPacketScoreboardObjective.get()) ||
			(packet instanceof  S3CPacketUpdateScore && settings.S3CPacketUpdateScore.get()) ||
			(packet instanceof  S3DPacketDisplayScoreboard && settings.S3DPacketDisplayScoreboard.get()) ||
			(packet instanceof  S3EPacketTeams && settings.S3EPacketTeams.get()) ||
			(packet instanceof  S3FPacketCustomPayload && settings.S3FPacketCustomPayload.get()) ||
			(packet instanceof  S40PacketDisconnect && settings.S40PacketDisconnect.get()) ||
			(packet instanceof  S41PacketServerDifficulty && settings.S41PacketServerDifficulty.get()) ||
			(packet instanceof  S42PacketCombatEvent && settings.S42PacketCombatEvent.get()) ||
			(packet instanceof  S43PacketCamera && settings.S43PacketCamera.get()) ||
			(packet instanceof  S44PacketWorldBorder && settings.S44PacketWorldBorder.get()) ||
			(packet instanceof  S45PacketTitle && settings.S45PacketTitle.get()) ||
			(packet instanceof  S46PacketSetCompressionLevel && settings.S46PacketSetCompressionLevel.get()) ||
			(packet instanceof  S47PacketPlayerListHeaderFooter && settings.S47PacketPlayerListHeaderFooter.get()) ||
			(packet instanceof  S48PacketResourcePackSend && settings.S48PacketResourcePackSend.get()) ||
			(packet instanceof  S49PacketUpdateEntityNBT  && settings.S49PacketUpdateEntityNBT.get())
			(packet instanceof  PacketBuffer  && settings.PacketBuffer.get())
		) {
          event.cancelEvent();
		}
	}
	
	this.addValues = function (values) {
		for (var i in settings) {
		    values.add(settings[i]);
			}
		}
	}
	
var add2 = new add2();
var add2;

function onLoad() {}

function onEnable() {
add2client = moduleManager.registerModule(add2);
}

function onDisable() {
moduleManager.unregisterModule(add2);
}