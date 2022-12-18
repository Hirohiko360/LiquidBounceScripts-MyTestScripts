script = registerScript({
    name: "TNTTime",
    authors: ["MyScarlet"],
    version: "1.0"
});

script.import("Core.lib");
script.import("utils/RenderUtils.js");

module = {
    name: "TNTTime",
    description: "Show the remain time of TNT primed.",
    category: "Render",
    onRender3D: function () {
        var sb = mc.theWorld.getScoreboard();
        var so = sb && sb.getObjectiveInDisplaySlot(1);
        var displayName = so && so.getDisplayName();
        
        var playingBedwars = sb && so && displayName && (displayName.match("BED WARS") || displayName.match("起床战争"));
        
        for each (var entity in mc.theWorld.loadedEntityList) {
            if (!(entity instanceof EntityTNTPrimed))
                continue;

            var tick = playingBedwars ? entity.fuse - 28 : entity.fuse;
            if (tick < 1) continue;

            var renderTag = (tick / 20).toFixed(2) + 's';

            var hue = Math.min(tick / (playingBedwars ? 52 : 80), 1) / 3;
            var color = java.awt.Color.getHSBColor(hue, 1, 1);
            var font = mc.fontRendererObj;
            var width = font.getStringWidth(renderTag);

            drawFaceToPlayer([entity.posX, entity.posY + 1.25, entity.posZ], function()  {
                Gui.drawRect(-width * 0.5 - 2, -font.FONT_HEIGHT - 1, width * 0.5 + 2, 0, 0x7F000000);
                font.drawString(renderTag, -width / 2, -font.FONT_HEIGHT, color.getRGB());
            });
        }
    }
};
