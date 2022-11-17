/// api_version=2

var script = registerScript({
    name: "test12324'", 
    version: "1.0.0", 
    authors: ["yby360"]
});

script.on("load", function() {
    var key = eventData.getKey();

    if (key == 28) {
        Chat.print("Pressed enter key!");
});

script.on("enable", function() {
    Chat.print("Demo Script enabled.");
});

script.on("disable", function() {
    Chat.print("Demo Script disabled.");
});

script.import("demo_files/tabs.js");
script.import("demo_files/modules.js");
script.import("demo_files/commands.js");