///engine_flags=--language=es6
var scriptName = "TestCPS";
var scriptVersion = 0.2;
var scriptAuthor = "mumy++";

var StringSelection = Java.type("java.awt.datatransfer.StringSelection");
var BoolValue = Java.type("net.ccbluex.liquidbounce.value.BoolValue");
var FloatValue = Java.type("net.ccbluex.liquidbounce.value.FloatValue");
var IntegerValue = Java.type("net.ccbluex.liquidbounce.value.IntegerValue");
var ListValue = Java.type("net.ccbluex.liquidbounce.value.ListValue");
var TextValue = Java.type("net.ccbluex.liquidbounce.value.TextValue");
var ScaledResolution = Java.type("net.minecraft.client.gui.ScaledResolution");
var C02PacketUseEntity = Java.type("net.minecraft.network.play.client.C02PacketUseEntity");
var C0APacketAnimation = Java.type("net.minecraft.network.play.client.C0APacketAnimation");
var System = Java.type("java.lang.System");

function TestCPS() {

    const setting = {
        float: function (name, def, min, max, object) {
            return object == null ? value.createFloat(name, def, min, max) : new _AdaptedValue(new (Java.extend(FloatValue, object))(name, def, min, max));
        },
        integer: function (name, def, min, max, object) {
            return object == null ? value.createInteger(name, def, min, max) : new _AdaptedValue(new (Java.extend(IntegerValue, object))(name, def, min, max));
        },
        boolean: function (name, def, object) {
            return object == null ? value.createBoolean(name, def) : new _AdaptedValue(new (Java.extend(BoolValue, object))(name, def));
        },
        list: function (name, values, def, object) {
            return object == null ? value.createList(name, values, def) : new _AdaptedValue(new (Java.extend(ListValue, object))(name, values, def));
        },
        text: function (name, def, object) {
            return object == null ? value.createText(name, def) : new _AdaptedValue(new (Java.extend(TextValue, object))(name, def));
        }
    };

    const settings = {
        mode: setting.list("Mode", ["Swing", "AttackEvent", "AttackPacket"], "Swing"),
        multiplier: setting.float("Multiplier", 0, 0, 2, {
            onChanged: function (oldValue, newValue) {
                const multiplier = settings.multiplier;
                multiplier.set(Math.round(multiplier.get() * 2) / 2);
            }
        }),
        x: setting.integer("X", 0, -500, 500),
        y: setting.integer("Y", 0, -500, 500)
    };

    let buffer = [];

    this.getName = function () {
        return "TestCPS";
    }

    this.getDescription = function () {
        return "TestCPS-Module, By-mumy";
    }

    this.getCategory = function () {
        return "Misc";
    }

    this.onEnable = function () {

    }

    this.onDisable = function () {
        
    }

    this.onAttack = function (event) {
        if (settings.mode.get() === "AttackEvent") {
            buffer.push(System.currentTimeMillis());
        }
    }

    this.onRender2D = function (event) {
        const mcHeight = new ScaledResolution(mc).getScaledHeight();
        const mcWidth = new ScaledResolution(mc).getScaledWidth();
        const cps = computeCPS();
        mc.fontRendererObj.drawStringWithShadow("CPS: " + (cps < 10 ? " " + cps : cps), mcWidth / 2 - 13 + settings.x.get(), mcHeight / 2 - 15 + settings.y.get(), 0x007EFF);
    }

    this.onPacket = function (event) {
        const packet = event.getPacket();
        if (packet instanceof C0APacketAnimation && settings.mode.get() === "Swing") {
            buffer.push(System.currentTimeMillis());
        } else if (packet instanceof C02PacketUseEntity && packet.getAction() === C02PacketUseEntity.Action.ATTACK && settings.mode.get() === "AttackPacket") {
            buffer.push(System.currentTimeMillis());
        }
    }

    this.addValues = function (values) {
        for (let i in settings) {
            values.add(settings[i]);
        }
    }

    function computeCPS() {
        const newBuffer = [];
        const minTimeMillis = System.currentTimeMillis() - 1000;
        for (let i = 0; i < buffer.length; ++i) {
            const timeMillis = buffer[i];
            if (timeMillis > minTimeMillis) {
                newBuffer.push(timeMillis);
            }
        }
        buffer = newBuffer;
        return Math.round(buffer.length * (settings.multiplier.get() === 0 ? mc.isIntegratedServerRunning() && settings.mode.get() !== "AttackEvent" ? 0.5 : 1 : settings.multiplier.get()));
    }

}

let client;

function onLoad() {}

function onEnable() {
    client = moduleManager.registerModule(new TestCPS());
}

function onDisable() {
    moduleManager.unregisterModule(client);
}

