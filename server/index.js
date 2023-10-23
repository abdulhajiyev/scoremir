const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

app.use(cors());


const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
})

/* io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('message', (data) => {
    console.log(data);
  })
});
 */

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);
  socket.on('updateCount', (newCount) => {
    console.log(`Count updated to: ${newCount}`);
    io.emit('updateCount', newCount);
  });
});

server.listen(3001, () => {
  console.log('listening on localhost:3001');
});