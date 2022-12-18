script = registerScript({
    name: "DamageParticles",
    authors: ["MyScarlet"],
    version: "1.5"
});

script.import("Core.lib");
script.import("utils/RenderUtils.js");

var particles = new java.util.LinkedList();
var healthMap = new java.util.HashMap();

module = {
    name: "DamageParticles",
    category: "Render",
    values: [
        livingTicks = value.createInteger("LivingFPS", 90, 20, 300),
        scale = value.createFloat("Scale", 1.0, 0.5, 3.0)
    ],
    onUpdate: function() {
        for each (var entity in mc.theWorld.loadedEntityList) {
            if (entity === mc.thePlayer || !(entity instanceof EntityLivingBase)) continue;

            if (!healthMap[entity]) {
                healthMap[entity] = entity.getHealth();
                continue;
            }

            var healthVariation = entity.getHealth() - healthMap[entity]; // this tick - last tick

            if (!healthVariation) continue;

            particles.add({
                ticks: 0,
                // if health increased green (a) else red (c)
                text: "\247" + String.fromCharCode(98 - java.lang.Math.signum(healthVariation)) + (Math.round(10 * Math.abs(healthVariation)) * .1).toFixed(1),
                location: [
                    entity.posX + entity.motionX + RandomUtils.nextDouble(-0.3, 0.3),
                    entity.posY + (entity.getEntityBoundingBox().maxY - entity.getEntityBoundingBox().minY) * 0.7,
                    entity.posZ + entity.motionZ + RandomUtils.nextDouble(-0.3, 0.3)
                ]
            });
            healthMap[entity] = entity.getHealth();
        }
    },
    onRender3D: function() {
        GL11.glPushMatrix();
        GL11.glScalef(scale.get(), scale.get(), scale.get());
        for (var it = particles.iterator(), p; it.hasNext() && (p = it.next()); p.ticks++) {
            drawFaceToPlayer(p.location, function()
                mc.fontRendererObj.drawStringWithShadow(p.text, -mc.fontRendererObj.getStringWidth(p.text) * 0.5, -mc.fontRendererObj.FONT_HEIGHT + 1, 0));
            p.ticks <= 30 * Math.log(livingTicks.get() * 0.05) && (p.location[1] += p.ticks * 0.001);
            p.ticks > livingTicks.get() && it.remove();
        }
        GL11.glPopMatrix();
    }
}
