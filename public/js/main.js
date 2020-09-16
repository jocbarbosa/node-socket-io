const chatForm = document.querySelector('#chat-form');

const socket = io();

socket.on('message', message => {
  console.log(message);
  outputMessage(message);
});

// Submit message
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const msg = e.target.elements.msg.value;

  // Emit message to server
  socket.emit('chatMessage', msg);
});

// Output message to DOM
const outputMessage = (message) => {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = `<p class="meta">Brad <span>9:00 pm</span></p>
    <p class="text">
      ${message}
  </p>`;

  document.querySelector('.chat-messages').appendChild(div);
}