var C0FPacketConfirmTransaction = Java.type('net.minecraft.network.play.client.C0FPacketConfirmTransaction'),
    C00PacketKeepAlive = Java.type('net.minecraft.network.play.client.C00PacketKeepAlive'),
    MSTimer = Java.type('net.ccbluex.liquidbounce.utils.timer.MSTimer'),
    msTimer = new MSTimer(),
    transactions = [],
    keepAlives = [];
var script = registerScript({
    name: 'SpartanDisabler',
    version: '0.0.0',
    authors: ['Shurpe']
});
script.registerModule({
    name: 'SpartanDisabler',
    category: 'Fun', 
    description: ''

}, function (module) {
    module.on('packet', function(e) {
        var packet = e.getPacket();
        if (packet instanceof C00PacketKeepAlive && packet != keepAlives[keepAlives.length - 1]) {
            keepAlives.push(packet);
            e.cancelEvent();
        }
        if (packet instanceof C0FPacketConfirmTransaction && packet != transactions[transactions.length - 1]) {
            transactions.push(packet);
            e.cancelEvent();
        }
    });
    module.on('update', function() {
        if (keepAlives.length > 0 && transactions.length > 0) {
            if (msTimer.hasTimePassed(3000)) {
                mc.thePlayer.sendQueue.addToSendQueue(keepAlives[keepAlives.length - 1]);
                mc.thePlayer.sendQueue.addToSendQueue(transactions[transactions.length - 1]);
                transactions = [];
                keepAlives = [];
                msTimer.reset();
            }
        }
    });
});