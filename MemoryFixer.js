module = {
    name: "MemoryFixer",
    author: "CzechHek",
    onUpdate: function () {
        timer.hasTimePassed(3000) && (Runtime.gc(), timer.reset());
    }
}

script.import("Core.lib");
timer = new MSTimer();
Runtime = Java.type("java.lang.Runtime").getRuntime();