const socket = io();
const form = document.getElementById("form");
const input = document.getElementById("input");
const messages = document.getElementById("messages");

// import { sendMessage, receiveMessage } from "./utils";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});
//
socket.on("chat message", function (msg) {
  const item = document.createElement("li");

  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

socket.on("user leaves", function (msg) {
  const item = document.createElement("li");
  item.textContent = msg;

  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
