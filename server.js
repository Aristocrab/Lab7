const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

const clients = new Set();

io.on('connection', (socket) => {
  clients.add(socket);

  socket.on('message', (message) => {
    if (message.toLowerCase() === 'приплод') {
      const newAnimalMessage = 'Повідомлення про приплод тварин';
      io.emit('message', newAnimalMessage);
    }
  });

  socket.on('disconnect', () => {
    clients.delete(socket);
  });
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
