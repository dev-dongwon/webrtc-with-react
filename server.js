const http = require("http");
const app = require("./server/app");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
const io = require("socket.io")(server, { origins: "*:*" });

io.on("connection", socket => {
  console.log("user connect");
  socket.on("chat", msgObj => {
    console.log(msgObj);
  });
});

server.listen(PORT);
