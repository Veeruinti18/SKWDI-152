const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle socket.io connections
io.on('connection', (socket) => {
  console.log('New user connected');

  // Handle incoming messages
  socket.on('chatMessage', (msg) => {
    io.emit('chatMessage', msg); // Broadcast message to everyone
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
