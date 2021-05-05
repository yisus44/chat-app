function sendMessage(e, input) {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
}

function receiveMessage(msg, messages) {
  const item = document.createElement("li");

  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
}

export { sendMessage, receiveMessage };
