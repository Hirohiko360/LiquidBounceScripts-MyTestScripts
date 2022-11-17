/// api_version=2
var script = registerScript({
    name: "MyScript",
    version: "1.0.0",
    authors: ["My Name"]
});

script.registerModule({
    name: "MyModule",
    category: "Misc", 
    description: "An example module created with LiquidBounce's script API."
}, function (module) {
    module.on("enable", function() {
        Chat.print("Module enabled");
    });
});