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
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('updateScores', ({ team1, team2 }) => {
    console.log(`Scores updated to: Team 1 - ${team1}, Team 2 - ${team2}`);
    // Emit the updated scores to all connected clients
    io.emit('updateScores', { team1, team2 });
  });
});

server.listen(3001, () => {
  console.log('Server is listening on http://localhost:3001');
});
