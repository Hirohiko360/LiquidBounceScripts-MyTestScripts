/// api_version=2
var script = registerScript({
    name: "BlockStopper",
    version: "1.0.0",
    authors: ["Qther"]
});

"use strict";

var Items = Java.type("net.minecraft.init.Items");
var ItemBlock = Java.type("net.minecraft.item.ItemBlock");
var Blocks = Java.type("net.minecraft.init.Blocks");
var BlockPos = Java.type("net.minecraft.util.BlockPos");
var Vec3 = Java.type("net.minecraft.util.Vec3");
var EnumFacing = Java.type("net.minecraft.util.EnumFacing");
var FallingPlayer = Java.type("net.ccbluex.liquidbounce.utils.misc.FallingPlayer");
var InventoryUtils = Java.type("net.ccbluex.liquidbounce.utils.InventoryUtils");
var RotationUtils = Java.type("net.ccbluex.liquidbounce.utils.RotationUtils");
var EntityPlayer = Java.type("net.minecraft.entity.player.EntityPlayer");
var C05PacketPlayerLook = Java.type("net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook");
var C09PacketHeldItemChange = Java.type("net.minecraft.network.play.client.C09PacketHeldItemChange");

script.registerModule({
    name: "BlockStopper",
    description: "Stops your enemies by placing blocks",
    category: "Combat",
    settings: {
        Range: Setting.float({
            name: "Range",
            min: 0.0,
            max: 8.0,
            default: 4.5
        }),
        TicksAhead: Setting.integer({
            name: "TicksAhead",
            min: 1,
            max: 30,
            default: 5
        }),
        AutoSwitch: Setting.boolean({
            name: "AutoSwitch",
            default: true
        }),
        AutoSwitchBack: Setting.boolean({
            name: "AutoSwitchBack",
            default: true
        }),
        Silent: Setting.boolean({
            name: "Silent",
            default: true
        }),
        Macro: Setting.boolean({
            name: "Macro",
            default: true
        })
    }
}, function (module) {
	module.on("update", function () {
		if (module.settings.Macro.get()) moduleManager.getModule("BlockStopper").state = false;
		var entity = null;
        var rotationDifference = 1000;
        var currentEntity = null;
        var currentRotationDifference = 2000;
		var i = 0
        for (i = 0; i < mc.theWorld.loadedEntityList.length; i++) {
            currentEntity = mc.theWorld.loadedEntityList[i];
            if (currentEntity instanceof EntityPlayer && currentEntity != mc.thePlayer && mc.thePlayer.getPositionVector().distanceTo(currentEntity.getPositionVector()) <= module.settings.Range.get() && (currentRotationDifference = RotationUtils.getRotationDifference(currentEntity)) < rotationDifference) {
                entity = currentEntity;
                rotationDifference = currentRotationDifference;
            }
        }
        if (entity == null) {
            return;
        }
        var position = null;
        var ticksAhead = module.settings.TicksAhead.get();
        var fallingPlayer = new FallingPlayer(
            entity.posX,
            entity.posY,
            entity.posZ,
            entity.motionX,
            entity.motionY,
            entity.motionZ,
            entity.rotationYaw,
            entity.moveStrafing,
            entity.moveForward
        );
        var collision = fallingPlayer.findCollision(ticksAhead);

        if (collision != null) {
            position = collision.getPos();
        } else {
            var positionVector = entity.getPositionVector();
            positionVector.addVector(entity.motionX * ticksAhead, -1.0, entity.motionY * ticksAhead);
            position = new BlockPos(positionVector);
        }
		
		var positionVector = entity.getPositionVector();
        positionVector.addVector(entity.motionX * ticksAhead, -1.0, entity.motionY * ticksAhead);
        position = new BlockPos(positionVector);

        if (mc.theWorld.isAirBlock(position)) return;

        var blockSlot = -1;
        var itemStack = mc.thePlayer.getHeldItem();
        if (itemStack == null || !(itemStack.getItem() instanceof ItemBlock) || itemStack.stackSize <= 0) {
            if (!module.settings.AutoSwitch.get()) return;

            blockSlot = InventoryUtils.findAutoBlockBlock();

            if (blockSlot == -1) return;

            mc.getNetHandler().addToSendQueue(new C09PacketHeldItemChange(blockSlot - 36));

            itemStack = mc.thePlayer.inventoryContainer.getSlot(blockSlot).getStack();
        }
		
		var currYaw = mc.thePlayer.rotationYaw;
		var currPitch = mc.thePlayer.rotationPitch;
		var rotation = RotationUtils.faceBlock(position).rotation;
		
		mc.getNetHandler().addToSendQueue(new C05PacketPlayerLook(rotation.yaw, rotation.pitch, mc.thePlayer.onGround));
		
		if (!module.settings.Silent.get()) {
			mc.thePlayer.rotationYaw = rotation.yaw;
			mc.thePlayer.rotationPitch = rotation.pitch;
		}

        if (mc.playerController.onPlayerRightClick(mc.thePlayer, mc.theWorld, itemStack, position, EnumFacing.UP, new Vec3(position.getX() + 0.5, position.getY() + 1.0, position.getZ() + 0.5))) {
            mc.thePlayer.swingItem();
        }

        if (!module.settings.AutoSwitchBack.get() && blockSlot >= 0) mc.getNetHandler().addToSendQueue(new C09PacketHeldItemChange(mc.thePlayer.inventory.currentItem));
	});
});