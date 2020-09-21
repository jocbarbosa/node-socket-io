const chatForm = document.querySelector('#chat-form');
const chatMessages = document.querySelector('.chat-messages');

const socket = io();

socket.on('message', message => {
  console.log(message);
  outputMessage(message);

  // Scroll the page down
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Submit message
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const msg = e.target.elements.msg.value;

  // Emit message to server
  socket.emit('chatMessage', msg);

  outputMessage(msg);
});

// Output message to DOM
const outputMessage = (message) => {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = `<p class="meta">Brad <span>9:00</span></p>
    <p class="text">
      ${message}
  </p>`;

  document.querySelector('.chat-messages').appendChild(div);

  const msgField = document.querySelector('#msg');
  msgField.value = '';
}