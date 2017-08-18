const io = require('socket.io')(80)
const robot = require('robotjs')
const config = require('./config')

io.on('play', function(data) {
    robot.moveMouse(config.coord.x, config.coord.y)
    setTimeout(function() {

    }, 3000);
})