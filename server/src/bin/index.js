const cluster = require("cluster");
const { cpus } = require("os");

//const environment = require("../config/environment");
const serverListeners = require("./server-listeners");
const app = require("../app");

const log = require("../utils/log");

//const numCPUs = cpus().length;

const { onListening, onError } = serverListeners;
const { PORT } = 3000;
const server = app.listen(3000);

server.on("KameTcha Server listening", () => onListening(server));

log("KameTcha Server listening !!!");

server.on("error", err => onError(err, 3000));

/*if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  const { onListening, onError } = serverListeners;
  const { PORT } = 3000;
  const server = app.listen(PORT);

  server.on("KameTcha Server listening", () => onListening(server));

  server.on("error", err => onError(err, PORT));
}*/
