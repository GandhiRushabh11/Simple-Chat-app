const express = require("express");
const http = require("http");
const app = new express();
const { Server } = require("socket.io");
const path = require("path");
app.use(express.static(path.resolve("./public")));
app.get("/", (req, res) => {
  res.sendFile("./public/index.html");
});

const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
  console.log(`User Conncted With Socket :${socket.id}`);
  socket.on("user-message", (messgae) => {
    console.log(messgae);
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected`);
  });
});

server.listen(8000, () => {
  console.log(`Server listen at 8000`);
});
