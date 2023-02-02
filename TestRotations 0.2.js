///engine_flags=--language=es6
var scriptName = "TestRotations";
var scriptVersion = 0.2;
var scriptAuthor = "mumy++";

var BlockValue = Java.type("net.ccbluex.liquidbounce.value.BlockValue");
var BoolValue = Java.type("net.ccbluex.liquidbounce.value.BoolValue");
var FloatValue = Java.type("net.ccbluex.liquidbounce.value.FloatValue");
var IntegerValue = Java.type("net.ccbluex.liquidbounce.value.IntegerValue");
var ListValue = Java.type("net.ccbluex.liquidbounce.value.ListValue");
var TextValue = Java.type("net.ccbluex.liquidbounce.value.TextValue");

var C03PacketPlayer = Java.type("net.minecraft.network.play.client.C03PacketPlayer");
var S08PacketPlayerPosLook = Java.type("net.minecraft.network.play.server.S08PacketPlayerPosLook");
var RotationUtils = Java.type("net.ccbluex.liquidbounce.utils.RotationUtils");
var EventState = Java.type("net.ccbluex.liquidbounce.event.EventState");
var EntityHorse = Java.type("net.minecraft.entity.passive.EntityHorse");

function TestRotations() {

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
        horse: setting.boolean("Horse", true)
    };

    let rotation = false;
    let playerYaw = 0;

    this.getName = function () {
        return "TestRotations";
    }

    this.getDescription = function () {
        return "TestRotations-Module, By-mumy";
    }

    this.getCategory = function () {
        return "Misc";
    }

    this.onEnable = function () {
        rotation = false;
    }

    this.onPacket = function (event) {
        const packet = event.getPacket();
        if (packet instanceof C03PacketPlayer) {
            const player = mc.thePlayer;
            if (packet.rotating) {
                playerYaw = packet.yaw;
                rotation = playerYaw !== player.rotationYaw;
            } if (!rotation) {
                return;
            }
            player.rotationYawHead = playerYaw;
            player.renderYawOffset = playerYaw;
            const ridingEntity = player.ridingEntity;
            if (settings.horse.get() && ridingEntity instanceof EntityHorse) {
                ridingEntity.rotationYawHead = playerYaw;
                ridingEntity.renderYawOffset = playerYaw;
            }
        } else if (packet instanceof S08PacketPlayerPosLook) {
            rotation = false;
            playerYaw = packet.yaw;
        }
    }

}

let client;

function onLoad() {}

function onEnable() {
    client = moduleManager.registerModule(new TestRotations());
}

function onDisable() {
    moduleManager.unregisterModule(client);
}

