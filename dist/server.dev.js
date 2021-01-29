"use strict";

var http = require('http');

var app = require('./app');

var socket = require('socket.io');

app.set('port', process.env.PORT || 3000);
var server = http.createServer(app);
var io = socket(server);
io.on('connection', function (socket) {
  socket.on('state', function (data) {
    if (data == 1) {
      io.emit('state-set', 1);
    } else {
      io.emit('state-set', 0);
    }
  });
  socket.on('current-time', function (data) {
    io.emit('change-current-time', data);
  });
});
server.listen(app.get('port'), function () {
  console.log("Listening on ".concat(server.address().port));
  console.log("http://localhost:".concat(server.address().port));
});
module.exports = server;