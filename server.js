const http = require('http');
const app = require('./app');
const socket = require('socket.io');

app.set('port', process.env.PORT || 3000 );

let server = http.createServer(app);

let io = socket(server);

io.on('connection', socket => {
    socket.on('state', data => {
        if (data == 1) {
            io.emit('state-set', 1)
        } else {
            io.emit('state-set', 0)
        }
    });

    socket.on('current-time', data => {
        io.emit('change-current-time', data);
    });
});

server.listen(app.get('port'), () => {
    console.log(`Listening on ${server.address().port}`);
    console.log(`http://localhost:${server.address().port}`);
});

module.exports = server;