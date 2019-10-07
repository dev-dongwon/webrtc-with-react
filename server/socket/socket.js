const NAMESPACES = require("./namespaces");

const socketConnect = io => {
  NAMESPACES.forEach(namespace => {
    const nspSocket = io.of(namespace);

    nspSocket.on("connection", socket => {
      const username = socket.handshake.query.username;

      socket.on("join", (roomId, callback) => {
        socket.join(roomId);

        nspSocket.in(roomId).clients((err, clients) => {
          console.log(clients.length);
          callback({ clientLength: clients.length, username });
        });
      });

      socket.on("chat", data => {
        const { roomId, from, msg } = data;
        nspSocket.in(roomId).emit("chat", { from, msg });
      });
    });
  });
};

module.exports = socketConnect;
