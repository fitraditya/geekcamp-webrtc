var IO = require('socket.io')(4567);

IO.on('connection', function (socket) {
  socket.on('message', function (message) {
    socket.broadcast.emit('message', message);
  });
});
