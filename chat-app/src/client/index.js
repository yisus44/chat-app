const socket = io();
const form = document.getElementById("form");
const input = document.getElementById("input");
const messages = document.getElementById("messages");

import { sendMessage, receiveMessage } from "./utils";

form.addEventListener("submit", sendMessage(e, input));
//
socket.on("chat message", receiveMessage(msg, messages));

socket.on("user leaves", receiveMessage(msg, messages));
