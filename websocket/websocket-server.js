const WebSocket = require('ws')
const webSocketServer = new WebSocket.Server({ port: 3003 });
const messages = [];

webSocketServer.on('connection', webSocket => {
    webSocket.onmessage = messageEvent => {
        //récuperer les messages
        const message = messageEvent.data;
        //push du message
        messages.push(message);
        webSocketServer.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(messages));
            }
        });
    };
    webSocket.send(JSON.stringify(messages));
});

module.exports = webSocketServer;