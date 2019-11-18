const express = require("express");
const path = require("path");
const app = require("express")();

const server = require("http").Server(app);
const io = require("socket.io")(server);

// Handling a new connection from a client
io.on("connection", function(socket) {
  // sending a message on the init topic
  socket.emit("init", { status: "connected" });

  // the client is sending a new message
  socket.on("client_topic", function(message) {
    console.log(message);
  });
});

// if we are in production mode, we serve everything through this server
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));

  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

if (module === require.main) {
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    console.log("Press Ctrl+C to quit.");
  });
}
