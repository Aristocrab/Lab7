# Lab7

Чат, в якому після повідомлення від керівника підрозділу під’єднані користувачі отримують повідомлення щодо приплоду тварин.

Фрагмент відповіді серверу
```js
socket.on('message', (message) => {
    if (message.toLowerCase() === 'приплод') {
      const newAnimalMessage = 'Повідомлення про приплод тварин';
      io.emit('message', newAnimalMessage);
    }
});
```

Фрагмент логіки на клієнті
```js
const socket = io('http://localhost:8080');

socket.on('message', (message) => {
  const messageContainer = document.getElementById('message-container');
  messageContainer.innerHTML += `<p>${message}</p>`;
});

function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;

  socket.emit('message', message);
  messageInput.value = '';
}
```
