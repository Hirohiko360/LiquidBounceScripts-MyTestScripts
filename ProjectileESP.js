script = registerScript({
    name: "ProjectileESP",
    authors: ["MyScarlet"],
    version: "3.3"
});

script.import("Core.lib");
script.import("utils/RenderUtils.js");

var hitPositionWithColor = new java.util.HashMap(); //<RayTraceResult, Color>

var renderPos;

var TeamsModule = LiquidBounce.moduleManager.getModule("Teams");

module = {
    name: "ProjectileESP",
    escription: "Draw the route of fireballs & arrows.",
    category: "Render",
    values: [
		maxAmount = value.createInteger("MaxAmount", 16, 1, 64),
        maxLength = value.createInteger("MaxLength", 16, 0, 256),
        lineWidth = value.createFloat("LineWidth", 2.0, 0.5, 5.0),
        heldItem = value.createBoolean("HeldItem", false),
        fireball = value.createBoolean("Fireball", true),
        arrow = value.createBoolean("Arrow", true),
        fishHook = value.createBoolean("FishHook", true),
        other = value.createBoolean("Other", true)
    ],
    onRender3D: function() {
        renderPos = new Vec3(mc.getRenderManager().renderPosX, mc.getRenderManager().renderPosY, mc.getRenderManager().renderPosZ);

        hitPositionWithColor.clear();

        GL11.glPushMatrix();

        GL11.glBlendFunc(770, 771);
        GL11.glEnable(3042);
        GL11.glDisable(3553);
        GL11.glDisable(3008);
        GL11.glDisable(2929);
        GL11.glDepthMask(false);

        GL11.glEnable(2848);
        GL11.glHint(3154, 4354);

        GL11.glLineWidth(lineWidth.get());

		var count = 0;
        for each (var entity in mc.theWorld.loadedEntityList) {
			if (count >= maxAmount.get()) break;
			
            var gravity = 0.0;
            var size = 0.25;
            var accelScalar = 0.99; // 0.6 in water
            var color = new Color(255, 255, 255);

            var startPos = entity.getPositionVector();
            var acceleration = new Vec3(entity.motionX, entity.motionY, entity.motionZ);

            if (entity instanceof EntityFireball) {
                if (!fireball.get()) continue;

                accelScalar = 1.0;
                color = new Color(255, 0, 0);
                acceleration = acceleration.normalize();
            } else if (entity instanceof EntityArrow) {
                if (!arrow.get() || getField(entity, "field_70254_i" /**private boolean inGround */).get(entity)) continue;

                gravity = 0.05;
                size = 0.3;
                color = entity.shootingEntity && TeamsModule.isInYourTeam(entity.shootingEntity) ? new Color(0, 255, 0) : new Color(255, 0, 0);
            } else if (entity instanceof EntityFishHook) {
                if (!fishHook.get()) continue;

                gravity = 0.04;
                size = 0.25;
                accelScalar = 0.92;
                color = new Color(255, 192, 203);
            } else if (entity instanceof EntityPotion) {
                if (!other.get()) continue;

                gravity = 0.05;
                size = 0.25;
                accelSize = 0.5;

                var itemStack = getField(entity, "field_70197_d"/**private ItemStack potionDamage */).get(entity);
                var item = itemStack.getItem();
                color = new Color(item.getColorFromDamage(itemStack.getItemDamage()));
            } else if (entity instanceof EntityEnderPearl || entity instanceof EntitySnowball || entity instanceof EntityEgg) {
                if (!other.get()) continue;

                gravity = 0.03;
                size = 0.25;
                color = entity instanceof EntityEnderPearl ? new Color(0, 205, 205) : new Color(240, 255, 240);
            } else {
                continue;
            }

            getTrackAndHit(gravity, size, accelScalar, color, startPos, acceleration, entity);
			count++;
        }

        var itemStack = mc.thePlayer.getHeldItem();
        heldItemCheck:
        if (heldItem.get() && itemStack) {
            var item = itemStack.getItem();

            var accelSize = 1.5;
            var gravity = 0.0;
            var size = 0.25;
            var accelScalar = 0.99; // 0.6 in water
            var color = new Color(255, 255, 255);
            var isSplashPotion = false;

            if (item === Items.fire_charge) {
                if (!fireball.get()) break heldItemCheck;

                accelScalar = 1.0;
                color = new Color(255, 0, 0);
            } else if (item === Items.bow) {
                if (!arrow.get()) break heldItemCheck;

                gravity = 0.05;
                size = 0.3;

                var power = mc.thePlayer.getItemInUseDuration() * 0.05;
                power = power * (power + 2) / 3;

                if (power < 0.1) break heldItemCheck;

                if (power > 1) power = 1;

                accelSize = power * 3;

                color = Color.getHSBColor((1 - power) / 3, 1, 1);
            } else if (item === Items.fishing_rod) {
                if (!fishHook.get()) break heldItemCheck;

                gravity = 0.04;
                size = 0.25;
                accelScalar = 0.92;
                color = new Color(255, 192, 203);
            } else if (item instanceof ItemPotion && ItemPotion.isSplash(itemStack.getItemDamage())) {
                if (!other.get()) break heldItemCheck;

                isSplashPotion = true;
                gravity = 0.05;
                size = 0.25;
                accelSize = 0.5;
                color = new Color(item.getColorFromDamage(itemStack.getItemDamage()));
            } else if (item === Items.ender_pearl || item === Items.snowball || item === Items.egg) {
                if (!other.get()) break heldItemCheck;

                gravity = 0.03;
                size = 0.25;
                color = item === Items.ender_pearl ? new Color(0, 205, 205) : new Color(240, 255, 240);
            } else {
                break heldItemCheck;
            }

            var yaw = Math.toRadians(mc.thePlayer.rotationYaw), pitch = Math.toRadians(mc.thePlayer.rotationPitch);
            var startPos = renderPos.addVector(-0.16 * Math.cos(yaw), mc.thePlayer.eyeHeight - 0.10000000149011612, -0.16 * Math.sin(yaw));

            var acceleration = new Vec3(
                -Math.sin(yaw) * Math.cos(pitch),
                -Math.sin(pitch - (isSplashPotion ? 0.3490658504 : 0)), // -20 deg
                Math.cos(yaw) * Math.cos(pitch)
            ).normalize();

            acceleration = new Vec3(acceleration.xCoord * accelSize, acceleration.yCoord * accelSize, acceleration.zCoord * accelSize);

            getTrackAndHit(gravity, size, accelScalar, color, startPos, acceleration, mc.thePlayer);
        }

        GL11.glEnable(3553);
        GL11.glDisable(2848);
        GL11.glEnable(3008);
        GL11.glEnable(2929);
        GL11.glDepthMask(true);
        GL11.glDisable(3042);
        GL11.glColor4f(1, 1, 1, 1);

        GL11.glPopMatrix();

        for (var hitResult in hitPositionWithColor) {
            var color = hitPositionWithColor[hitResult];

            switch (hitResult.typeOfHit) {
                case MovingObjectPosition.MovingObjectType.ENTITY:
                    RenderUtils.drawEntityBox(hitResult.entityHit, color, false);
                    break;
                case MovingObjectPosition.MovingObjectType.BLOCK:
                    RenderUtils.drawBlockBox(hitResult.getBlockPos(), color, false);
                    break;
                default:
                    continue;
            }

            GL11.glPushMatrix();
			
            var sideVec = hitResult.sideHit.getDirectionVec();
            sideVec = new Vec3(sideVec.getX() * 0.0021, sideVec.getY() * 0.0021, sideVec.getZ() * 0.0021);
            var center = hitResult.hitVec.add(sideVec);
            GL11.glTranslated(center.xCoord - renderPos.xCoord, center.yCoord - renderPos.yCoord, center.zCoord - renderPos.zCoord);

            switch (hitResult.sideHit) {
                case EnumFacing.WEST: GL11.glRotated(90, 0, 1, 0); break;
                case EnumFacing.EAST: GL11.glRotated(90, 0, -1, 0); break;
                case EnumFacing.UP: GL11.glRotated(90, 1, 0, 0); break;
                case EnumFacing.DOWN: GL11.glRotated(90, -1, 0, 0); break;
                case EnumFacing.SOUTH: GL11.glRotated(180, 1, 0, 0); break;
            }

            RenderUtils.drawFilledCircle(0, 0, 0.1, color);

            GL11.glPopMatrix();
        }
    }
}

function getTrackAndHit(gravity, size, accelScalar, color, startPos, acceleration, entityExcluded) {
    if (!acceleration.lengthVector()) return;

    var trackPoints = [startPos];

    // Vec3
    var cur = startPos.add(acceleration), lastCur = startPos;

    // RayTraceResult
    var blockCollision = null, entityCollision = null;

    curve:
    for (var curveLength = 0; (blockCollision = mc.theWorld.rayTraceBlocks(lastCur, cur, false, true, false)) == null && curveLength < maxLength.get(); ) {

        var projectileBox = new AxisAlignedBB(cur.xCoord - size, cur.yCoord - size, cur.zCoord - size, cur.xCoord + size,
            cur.yCoord + size, cur.zCoord + size).addCoord(acceleration.xCoord, acceleration.yCoord, acceleration.zCoord).expand(1.0, 1.0, 1.0);

        var chunkMinX = (projectileBox.minX - 2) >> 4, chunkMaxX = (projectileBox.maxX + 2) >> 4;
        var chunkMinZ = (projectileBox.minZ - 2) >> 4, chunkMaxZ = (projectileBox.maxZ + 2) >> 4;

        //check entities in the track
        for (var x = chunkMinX; x <= chunkMaxX; x++)
            for (var z = chunkMinZ; z <= chunkMaxZ; z++)
                for each (var entities in mc.theWorld.getChunkFromChunkCoords(x, z).getEntityLists()) {
                    for each (var it in entities) {
                        var entityBox = it.getEntityBoundingBox().expand(size, size, size);
                        if (it === entityExcluded || it instanceof EntityEnderman || !entityBox.intersectsWith(projectileBox))
                            continue;

                        if (entityCollision = entityBox.calculateIntercept(lastCur, cur)) {
                            entityCollision.typeOfHit = MovingObjectPosition.MovingObjectType.ENTITY;
                            entityCollision.entityHit = it;
                            hitPositionWithColor[entityCollision] = color;
                            trackPoints.push(entityCollision.hitVec);
                            break curve;
                        }
                    }
                }

        var scalar = BlockUtils.getMaterial(new BlockPos(cur)) === Material.water ? 0.6 : accelScalar;
        acceleration = new Vec3(acceleration.xCoord * scalar, acceleration.yCoord * scalar, acceleration.zCoord * scalar).subtract(0, gravity, 0);

        trackPoints.push(cur);

        curveLength += lastCur.distanceTo(cur);
        lastCur = cur;
        cur = cur.add(acceleration);
    }

    blockCollision && (hitPositionWithColor[blockCollision] = color) && trackPoints.push(blockCollision.hitVec);

    if (trackPoints.length <= 1) return;

    GL11.glBegin(gravity ? 3 : 1);
    RenderUtils.glColor(color);
    // Start=startPos End=hitVec
    (gravity ? trackPoints : [startPos, trackPoints.last()]).forEach(function(v)
        GL11.glVertex3d(v.xCoord - renderPos.xCoord, v.yCoord - renderPos.yCoord, v.zCoord - renderPos.zCoord));
    GL11.glEnd();
}
