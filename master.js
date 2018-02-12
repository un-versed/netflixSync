var app = require('http').createServer()
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(5500);

io.on('connection', function (socket) {
    socket.emit('play', {
        hello: 'world'
    });
});