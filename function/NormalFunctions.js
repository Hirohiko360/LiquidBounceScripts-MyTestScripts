//bases
function getMoveYaw() { //Basis of setSpeed()
        moveYaw = mc.thePlayer.rotationYaw
    if(mc.thePlayer.moveForward && !mc.thePlayer.moveStrafing) {
        moveYaw += mc.thePlayer.moveForward > 0 ? 0 : 180
    } else if(mc.thePlayer.moveForward && mc.thePlayer.moveStrafing) {
        if (mc.thePlayer.moveForward > 0) moveYaw += mc.thePlayer.moveStrafing > 0 ? -45 : 45
        else moveYaw += mc.thePlayer.moveStrafing > 0 ? 225 : 135
    } else if(mc.thePlayer.moveStrafing && !mc.thePlayer.moveForward) moveYaw += mc.thePlayer.moveStrafing > 0 ? -90 : 90
    return moveYaw
}

//functions
//moving boolean
function isMoving(mode) { //check whether the player is moving
    if(mode==1){
        return getForward() || getBack() || getLeft() || getRight()
    }
    if(mode==2){
        return mc.thePlayer.movementInput.moveForward || mc.thePlayer.movementInput.moveStrafe
    }
}
function StopMoving(mode) { //check whether the player isn't moving
    if(mode==1){
        return !getForward() && !getBack() && !getLeft() && !getRight()
    }
    if(mode==2){
        return !mc.thePlayer.movementInput.moveForward && !mc.thePlayer.movementInput.moveStrafe
    }
}

//set speed&strafe
function setSpeed(speed, strafe) { //Set your speed & strafe
    if(StopMoving(1) || StopMoving(2)) return
    if(mc.thePlayer.onGround || (strafe && !mc.thePlayer.onGround)) {
        yaw = getMoveYaw()
        mc.thePlayer.motionX = -Math.sin(Math.PI / 180 * yaw) * speed
        mc.thePlayer.motionZ = Math.cos(Math.PI / 180 * yaw) * speed
    }
}

//random number
function rd(rdbase, rdmin, rdmax) { //Return a number randomly
    return rdbase+(Math.floor(Math.random()*((rdmax+1)-rdmin)+rdmin))
}

//sendpacket
function SendPacketC03(onground) {
        mc.thePlayer.sendQueue.addToSendQueue(new C03(onground))
}
function SendPacketC04(x, y, z, onground) {
        mc.thePlayer.sendQueue.addToSendQueue(new C04(mc.thePlayer.posX+x, mc.thePlayer.posY+y, mc.thePlayer.posZ+z, onground))
}
function SendPacketC05(yaw, pitch, onground) {
        mc.thePlayer.sendQueue.addToSendQueue(new C05(mc.thePlayer.rotationYaw+yaw, mc.thePlayer.rotationPitch+pitch, onground))
}
function SendPacketC06(x, y, z, yaw, pitch, onground) {
        mc.thePlayer.sendQueue.addToSendQueue(new C06(mc.thePlayer.posX+x, mc.thePlayer.posY+y, mc.thePlayer.posZ+z, mc.thePlayer.rotationYaw+yaw, mc.thePlayer.rotationPitch+pitch, onground))
}
function SendBlockPacket() {
        mc.thePlayer.sendQueue.addToSendQueue(new C08(mc.thePlayer.inventory.getCurrentItem()))
}

function StopBlockPacket() {
        mc.thePlayer.sendQueue.addToSendQueue(new C07(C07.Action.RELEASE_USE_ITEM, new BlockPos(0, 0, 0), EnumFacing.UP))
}

//motionx
function getMotionX() {
        return mc.thePlayer.motionX
}
function setMotionX(x) {
        mc.thePlayer.motionX = x
}

//motiony
function getMotionY() {
        return mc.thePlayer.motionY
}
function setMotionY(y) {
        mc.thePlayer.motionY = y
}

//motionz
function getMotionZ() {
        return mc.thePlayer.motionZ
}
function setMotionZ(z) {
        mc.thePlayer.motionZ = z
}

//falldistance
function getFallDistance() {
        return mc.thePlayer.fallDistance
}
function setFallDistance(n) {
        mc.thePlayer.fallDistance = n
}

//onground
function getOnGround() {
        return mc.thePlayer.onGround
}
function setOnGround(boolean) {
        mc.thePlayer.onGround = boolean
}

//clientrotation
function getRotationYaw() {
        return mc.thePlayer.rotationYaw
}
function getRotationPitch() {
        return mc.thePlayer.rotationPitch
}
function setRotationC(yaw, pitch) {
        mc.thePlayer.rotationYaw = yaw
        mc.thePlayer.rotationPitch = pitch
}

//serverrotation
function setRotationS(yaw, pitch) {
        RotationUtils.setTargetRotation(new Rotation(yaw, pitch))
}

//keybindforward
function getForward() {
        return mc.gameSettings.keyBindForward.pressed
}
function setForward(boolean) {
        mc.gameSettings.keyBindForward.pressed = boolean
}

//keybindback
function getBack() {
        return mc.gameSettings.keyBindBack.pressed
}
function setBack(boolean) {
        mc.gameSettings.keyBindBack.pressed = boolean
}

//keybindleft
function getLeft() {
        return mc.gameSettings.keyBindLeft.pressed
}
function setLeft(boolean) {
        mc.gameSettings.keyBindLeft.pressed = boolean
}

//keybindright
function getRight() {
        return mc.gameSettings.keyBindRight.pressed
}
function setRight(boolean) {
        mc.gameSettings.keyBindRight.pressed = boolean
}

//keybindjump
function getJump() {
        return mc.gameSettings.keyBindJump.pressed
}
function setJump(boolean) {
        mc.gameSettings.keyBindJump.pressed = boolean
}

//keybindsneak
function getSneak() {
        return mc.gameSettings.keyBindSneak.pressed
}
function setSneak(boolean) {
        mc.gameSettings.keyBindSneak.pressed = boolean
}

//keybindattack
function getAttack() {
        return mc.gameSettings.keyBindAttack.pressed
}
function setAttack(boolean) {
        mc.gameSettings.keyBindAttack.pressed = boolean
}

//keybinduseitem
function getUseItem() {
        return mc.gameSettings.keyBindUseItem.pressed
}
function setUseItem(boolean) {
        mc.gameSettings.keyBindUseItem.pressed = boolean
}

//timer
function getTimer() {
        return mc.timer.timerSpeed
}
function setTimer(n) {
        mc.timer.timerSpeed = n
}

//airspeed
function getAirSpeed() {
        return mc.thePlayer.speedInAir
}
function setAirSpeed(n) {
        mc.thePlayer.speedInAir = n
}

//posx
function getPosX() {
        return mc.thePlayer.posX
}
function setPosX(n) {
        mc.thePlayer.posX = n
}

//posy
function getPosY() {
        return mc.thePlayer.posY
}
function setPosY(n) {
        mc.thePlayer.posY = n
}

//posz
function getPosZ() {
        return mc.thePlayer.posZ
}
function setPosZ(n) {
        mc.thePlayer.posZ = n
}

//setposition
function setPosition(x, y, z) {
        mc.thePlayer.setPosition(getPosX()+x, getPosY()+y, getPosZ()+z)
}

//ishelditem
function isHeldSword() {
        return mc.thePlayer.getHeldItem() && mc.thePlayer.getHeldItem().getItem() instanceof Sword
}
function isHeldFood() {
        return mc.thePlayer.getHeldItem() && mc.thePlayer.getHeldItem().getItem() instanceof Food
}
function isHeldBow() {
        return mc.thePlayer.getHeldItem() && mc.thePlayer.getHeldItem().getItem() instanceof Bow
}
function isHeldPotion() {
        return mc.thePlayer.getHeldItem() && mc.thePlayer.getHeldItem().getItem() instanceof Potion
}
function isHeldBucketMilk() {
        return mc.thePlayer.getHeldItem() && mc.thePlayer.getHeldItem().getItem() instanceof BucketMilk
}

//sprint
function setSprint(boolean) {
       mc.thePlayer.setSprinting(boolean)
}

//Packets
C00Handshake=Java.type("net.minecraft.network.handshake.client.C00Handshake");C00=Java.type("net.minecraft.network.play.client.C00PacketKeepAlive");C00PacketLoginStart=Java.type("net.minecraft.network.login.client.C00PacketLoginStart");C00PacketServerQuery=Java.type("net.minecraft.network.status.client.C00PacketServerQuery");C01PacketChatMessage=Java.type("net.minecraft.network.play.client.C01PacketChatMessage");C01PacketEncryptionResponse=Java.type("net.minecraft.network.login.client.C01PacketEncryptionResponse");C01PacketPing=Java.type("net.minecraft.network.status.client.C01PacketPing");C02=Java.type("net.minecraft.network.play.client.C02PacketUseEntity");C03=Java.type("net.minecraft.network.play.client.C03PacketPlayer");C04=Java.type("net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition");C05=Java.type("net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook");C06=Java.type("net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook");C07=Java.type("net.minecraft.network.play.client.C07PacketPlayerDigging");C08=Java.type("net.minecraft.network.play.client.C08PacketPlayerBlockPlacement");C09=Java.type("net.minecraft.network.play.client.C09PacketHeldItemChange");C0A=Java.type("net.minecraft.network.play.client.C0APacketAnimation");C0B=Java.type("net.minecraft.network.play.client.C0BPacketEntityAction");C0C=Java.type("net.minecraft.network.play.client.C0CPacketInput");C0D=Java.type("net.minecraft.network.play.client.C0DPacketCloseWindow");C0E=Java.type("net.minecraft.network.play.client.C0EPacketClickWindow");C0F=Java.type("net.minecraft.network.play.client.C0FPacketConfirmTransaction");C10=Java.type("net.minecraft.network.play.client.C10PacketCreativeInventoryAction");C11=Java.type("net.minecraft.network.play.client.C11PacketEnchantItem");C12=Java.type("net.minecraft.network.play.client.C12PacketUpdateSign");C13=Java.type("net.minecraft.network.play.client.C13PacketPlayerAbilities");C14=Java.type("net.minecraft.network.play.client.C14PacketTabComplete");C15=Java.type("net.minecraft.network.play.client.C15PacketClientSettings");C16=Java.type("net.minecraft.network.play.client.C16PacketClientStatus");C17=Java.type("net.minecraft.network.play.client.C17PacketCustomPayload");C18=Java.type("net.minecraft.network.play.client.C18PacketSpectate");C19=Java.type("net.minecraft.network.play.client.C19PacketResourcePackStatus");S00PacketDisconnect=Java.type("net.minecraft.network.login.server.S00PacketDisconnect");S00=Java.type("net.minecraft.network.play.server.S00PacketKeepAlive");S00PacketServerInfo=Java.type("net.minecraft.network.status.server.S00PacketServerInfo");S01PacketEncryptionRequest=Java.type("net.minecraft.network.login.server.S01PacketEncryptionRequest");S01PacketJoinGame=Java.type("net.minecraft.network.play.server.S01PacketJoinGame");S01PacketPong=Java.type("net.minecraft.network.status.server.S01PacketPong");S02PacketChat=Java.type("net.minecraft.network.play.server.S02PacketChat");S02PacketLoginSuccess=Java.type("net.minecraft.network.login.server.S02PacketLoginSuccess");S03PacketEnableCompression=Java.type("net.minecraft.network.login.server.S03PacketEnableCompression");S03PacketTimeUpdate=Java.type("net.minecraft.network.play.server.S03PacketTimeUpdate");S04=Java.type("net.minecraft.network.play.server.S04PacketEntityEquipment");S05=Java.type("net.minecraft.network.play.server.S05PacketSpawnPosition");S06=Java.type("net.minecraft.network.play.server.S06PacketUpdateHealth");S07=Java.type("net.minecraft.network.play.server.S07PacketRespawn");S08=Java.type("net.minecraft.network.play.server.S08PacketPlayerPosLook");S09=Java.type("net.minecraft.network.play.server.S09PacketHeldItemChange");S0A=Java.type("net.minecraft.network.play.server.S0APacketUseBed");S0B=Java.type("net.minecraft.network.play.server.S0BPacketAnimation");S0C=Java.type("net.minecraft.network.play.server.S0CPacketSpawnPlayer");S0D=Java.type("net.minecraft.network.play.server.S0DPacketCollectItem");S0E=Java.type("net.minecraft.network.play.server.S0EPacketSpawnObject");S0F=Java.type("net.minecraft.network.play.server.S0FPacketSpawnMob");S10=Java.type("net.minecraft.network.play.server.S10PacketSpawnPainting");S11=Java.type("net.minecraft.network.play.server.S11PacketSpawnExperienceOrb");S12=Java.type("net.minecraft.network.play.server.S12PacketEntityVelocity");S13=Java.type("net.minecraft.network.play.server.S13PacketDestroyEntities");S14=Java.type("net.minecraft.network.play.server.S14PacketEntity");S15=Java.type("net.minecraft.network.play.server.S14PacketEntity.S15PacketEntityRelMove");S16=Java.type("net.minecraft.network.play.server.S14PacketEntity.S16PacketEntityLook");S17=Java.type("net.minecraft.network.play.server.S14PacketEntity.S17PacketEntityLookMove");S18=Java.type("net.minecraft.network.play.server.S18PacketEntityTeleport");S19=Java.type("net.minecraft.network.play.server.S19PacketEntityHeadLook");S19=Java.type("net.minecraft.network.play.server.S19PacketEntityStatus");S1B=Java.type("net.minecraft.network.play.server.S1BPacketEntityAttach");S1C=Java.type("net.minecraft.network.play.server.S1CPacketEntityMetadata");S1D=Java.type("net.minecraft.network.play.server.S1DPacketEntityEffect");S1E=Java.type("net.minecraft.network.play.server.S1EPacketRemoveEntityEffect");S1F=Java.type("net.minecraft.network.play.server.S1FPacketSetExperience");S20=Java.type("net.minecraft.network.play.server.S20PacketEntityProperties");S21=Java.type("net.minecraft.network.play.server.S21PacketChunkData");S22=Java.type("net.minecraft.network.play.server.S22PacketMultiBlockChange");S23=Java.type("net.minecraft.network.play.server.S23PacketBlockChange");S24=Java.type("net.minecraft.network.play.server.S24PacketBlockAction");S25=Java.type("net.minecraft.network.play.server.S25PacketBlockBreakAnim");S26=Java.type("net.minecraft.network.play.server.S26PacketMapChunkBulk");S27=Java.type("net.minecraft.network.play.server.S27PacketExplosion");S28=Java.type("net.minecraft.network.play.server.S28PacketEffect");S29=Java.type("net.minecraft.network.play.server.S29PacketSoundEffect");S2A=Java.type("net.minecraft.network.play.server.S2APacketParticles");S2B=Java.type("net.minecraft.network.play.server.S2BPacketChangeGameState");S2C=Java.type("net.minecraft.network.play.server.S2CPacketSpawnGlobalEntity");S2D=Java.type("net.minecraft.network.play.server.S2DPacketOpenWindow");S2E=Java.type("net.minecraft.network.play.server.S2EPacketCloseWindow");S2F=Java.type("net.minecraft.network.play.server.S2FPacketSetSlot");S30=Java.type("net.minecraft.network.play.server.S30PacketWindowItems");S31=Java.type("net.minecraft.network.play.server.S31PacketWindowProperty");S32=Java.type("net.minecraft.network.play.server.S32PacketConfirmTransaction");S33=Java.type("net.minecraft.network.play.server.S33PacketUpdateSign");S34=Java.type("net.minecraft.network.play.server.S34PacketMaps");S35=Java.type("net.minecraft.network.play.server.S35PacketUpdateTileEntity");S36=Java.type("net.minecraft.network.play.server.S36PacketSignEditorOpen");S37=Java.type("net.minecraft.network.play.server.S37PacketStatistics");S38=Java.type("net.minecraft.network.play.server.S38PacketPlayerListItem");S39=Java.type("net.minecraft.network.play.server.S39PacketPlayerAbilities");S3A=Java.type("net.minecraft.network.play.server.S3APacketTabComplete");S3B=Java.type("net.minecraft.network.play.server.S3BPacketScoreboardObjective");S3C=Java.type("net.minecraft.network.play.server.S3CPacketUpdateScore");S3D=Java.type("net.minecraft.network.play.server.S3DPacketDisplayScoreboard");S3E=Java.type("net.minecraft.network.play.server.S3EPacketTeams");S3F=Java.type("net.minecraft.network.play.server.S3FPacketCustomPayload");S40=Java.type("net.minecraft.network.play.server.S40PacketDisconnect");S41=Java.type("net.minecraft.network.play.server.S41PacketServerDifficulty");S42=Java.type("net.minecraft.network.play.server.S42PacketCombatEvent");S43=Java.type("net.minecraft.network.play.server.S43PacketCamera");S44=Java.type("net.minecraft.network.play.server.S44PacketWorldBorder");S45=Java.type("net.minecraft.network.play.server.S45PacketTitle");S46=Java.type("net.minecraft.network.play.server.S46PacketSetCompressionLevel");S47=Java.type("net.minecraft.network.play.server.S47PacketPlayerListHeaderFooter");S48=Java.type("net.minecraft.network.play.server.S48PacketResourcePackSend");S49=Java.type("net.minecraft.network.play.server.S49PacketUpdateEntityNBT")

//OtherBases
Potion = Java.type("net.minecraft.potion.Potion")
Rotation = Java.type('net.ccbluex.liquidbounce.utils.Rotation')
RotationUtils = Java.type('net.ccbluex.liquidbounce.utils.RotationUtils')
Entity = Java.type('net.minecraft.entity.Entity')
EntityLiving = Java.type('net.minecraft.entity.EntityLivingBase')
EntityPlayer = Java.type('net.minecraft.entity.player.EntityPlayer')
EntityArmorStand = Java.type('net.minecraft.entity.item.EntityArmorStand')
MSTimer = Java.type('net.ccbluex.liquidbounce.utils.timer.MSTimer')
Block = Java.type('net.minecraft.block.Block')
Blocks = Java.type('net.minecraft.init.Blocks')
BlockPos = Java.type('net.minecraft.util.BlockPos')
Display = Java.type('org.lwjgl.opengl.Display')
EnumFacing = Java.type('net.minecraft.util.EnumFacing')
MovementUtils = Java.type('net.ccbluex.liquidbounce.utils.MovementUtils')
RandomUtils = Java.type('net.ccbluex.liquidbounce.utils.misc.RandomUtils')
LiquidBounce = Java.type('net.ccbluex.liquidbounce.LiquidBounce')
AttackEvent = Java.type('net.ccbluex.liquidbounce.event.AttackEvent')
EventState = Java.type('net.ccbluex.liquidbounce.event.EventState')
Sword = Java.type('net.minecraft.item.ItemSword')
Food = Java.type('net.minecraft.item.ItemFood')
Bow = Java.type('net.minecraft.item.ItemBow')
Potion = Java.type('net.minecraft.item.ItemPotion')
BucketMilk = Java.type('net.minecraft.item.ItemBucketMilk')
AntiBot = Java.type('net.ccbluex.liquidbounce.features.module.modules.misc.AntiBot')
Packet = Java.type('net.minecraft.network.Packet')
ticks = 0