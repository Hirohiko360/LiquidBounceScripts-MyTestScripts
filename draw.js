      /// api_version=2
var script = registerScript({
    name: "lol",
    version: "2.0.0",
    authors: ["CCBlueX"]
});

script.import("lib/glFunctions.js");

script.registerModule({
    name: "Draw",
    description: "Draws a rectangle on the screen.",
    category: "Render"
}, function (module) {
    module.on("render2D", function (event) {
        drawRect(1, 100, 200, 200, 0xFFFFFFFF);	
        drawCircle(60, 300, 50, 0xFFFFFFFF);
        drawCircle(50, 300, 50, 0xFFFFFFFF);
        drawCircle(40, 300, 50, 0xFFFFFFFF);
        drawCircle(30, 300, 50, 0xFFFFFFFF);
        drawCircle(20, 300, 50, 0xFFFFFFFF);
        drawCircle(50, 50, 10, 0xFFFFFFFF);           //绘制圆形  
        drawCircle(100, 100, 20, 0xFFFFFFFF);         //绘制圆形  
        drawCircle(150, 150, 30, 0xFFFFFFFF);         //绘制圆形  
        drawCircle(200, 200, 40, 0xFFFFFFFF);         //绘制圆形  
        drawCircle(250, 250, 50, 0xFFFFFFFF);         //绘制圆形  
        drawCircle(300, 300, 60, 0xFFFFFFFF);         //绘制圆形  
        drawCircle(350, 350, 70, 0xFFFFFFFF);         //绘制圆形  	   
    });
});