const robot = require('robotjs')
const config = require('./config')
var socket = require('socket.io-client')('http://25.24.19.70:5500');

socket.on('play', function (data) {
    robot.moveMouse(config.coord.x, config.coord.y)
    setTimeout(function () {
        robot.mouseClick()
    }, 3000);
})