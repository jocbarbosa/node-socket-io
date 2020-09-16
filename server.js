require('dotenv/config');
const path = require('path');
const http = require('http');
const express = require('express');
const app = express();

const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Run when a client connects
io.on('connection', (socket) => {
    console.log('New websocket connection');

    // Send a message only to the user connected
    socket.emit('message', 'Welcome to ChatCord');

    // Broadcast when a user connects
    socket.broadcast.emit('message', 'A user has joined the chat');

    // Runs when client disconnects
    socket.on('disconnect', () => {
        io.emit('message', 'A user has left the chat');
    });

    // Listen chat messages
    socket.on('chatMessage', (msg) => {
        console.log(msg);
    })

});

server.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT}`)
});