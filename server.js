// Import required modules
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Initialize express app and HTTP server
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve the static files for the frontend
app.use(express.static('public'));

// Handle socket connections
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle message event
  socket.on('chatMessage', (msg) => {
    io.emit('chatMessage', msg); // Broadcast the message to all clients
  });

  // Handle disconnection event
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Set the server to listen on port 3000
server.listen(3000, () => {
  console.log('Server running on port 3000');
});
