const socket = io();

const chatForm = document.getElementById('chat-form');
const chatMessages = document.getElementById('chat-messages');

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const msg = e.target.elements.msg.value;

  socket.emit('chatMessage', msg);

  e.target.elements.msg.value = '';
  e.target.elements.msg.focus();
});

socket.on('chatMessage', (msg) => {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = `<p>${msg}</p>`;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
});
