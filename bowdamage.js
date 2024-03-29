/// api_version=2
var script = registerScript({
    name: "BowDamage",
    version: "1.0.0",
    authors: ["PlumerMan"]
});

var RotationUtils = Java.type('net.ccbluex.liquidbounce.utils.RotationUtils');
var Rotation = Java.type('net.ccbluex.liquidbounce.utils.Rotation');
var LiquidBounce = Java.type("net.ccbluex.liquidbounce.LiquidBounce");
var ItemStack = Java.type("net.minecraft.item.ItemStack");
var ItemBow = Java.type("net.minecraft.item.ItemBow");
var ItemFishingRod = Java.type("net.minecraft.item.ItemFishingRod");
var C09PacketHeldItemChange = Java.type("net.minecraft.network.play.client.C09PacketHeldItemChange");
var prevSlot = -1;
var sx, sz;
var waitingForDMG, ticksLeft, isRod, prevShouldInteract, shouldInteract = false;

script.registerModule({
    name: "BowDamage",
    description: "Damages yourself",
    category: "Fun",
    settings: {
        mname: Setting.text({
            name: "Module",
            default: "Fly"
        }),
    }
}, function (module) {
    module.on("enable", function () {
        waitingForDMG = true;
        ticksLeft = 4;
        sx = mc.thePlayer.posX; sz = mc.thePlayer.posZ;
        isRod = shouldInteract = false;
        prevSlot = mc.thePlayer.inventory.currentItem;
        for (x = 0; x < 9; ++x) {
            stack = mc.thePlayer.inventory.getStackInSlot(x);
            
            if(stack != null && stack.getItem() != null && (stack.getItem() instanceof ItemBow || stack.getItem() instanceof ItemFishingRod)) {
                
                if(mc.thePlayer.inventory.currentItem != x)
                    mc.thePlayer.sendQueue.addToSendQueue(new C09PacketHeldItemChange(x));
                
                mc.thePlayer.inventory.currentItem = x;

                if(stack.getItem() instanceof ItemFishingRod)
                    isRod = true;
                
                break;
            }
        }
    });

    module.on("disable", function () {
        var module = moduleManager.getModule(this.settings.mname.get());
        module.state = shouldInteract = this.state = false;
        prevSlot = -1;
        isRod = false;
        if(ticksLeft > 0)
            mc.thePlayer.inventory.currentItem = prevSlot;
    });

    module.on("update", function() {
        if(waitingForDMG) {
            mc.thePlayer.setPosition(sx, mc.thePlayer.posY, sz);
            mc.thePlayer.motionX = mc.thePlayer.motionZ = 0;
        }

        if(ticksLeft > 0) {
            ticksLeft--;
            
            if(!shouldInteract) {
                shouldInteract = true;
                return;
            }

            mc.gameSettings.keyBindUseItem.pressed = true;

            
            RotationUtils.setTargetRotation(new Rotation(mc.thePlayer.rotationYaw, -90))

            skip = false;
        } else {
            RotationUtils.setTargetRotation(new Rotation(mc.thePlayer.rotationYaw, -90))
            mc.gameSettings.keyBindUseItem.pressed = false;
            if(!isRod)
                mc.thePlayer.inventory.currentItem = prevSlot;
        }

        if(waitingForDMG && mc.thePlayer.hurtTime == 9) {
            var module = moduleManager.getModule(this.settings.mname.get());
            module.state = true; waitingForDMG = false;
            if(isRod)
                mc.thePlayer.inventory.currentItem = prevSlot;
        }
    });
});