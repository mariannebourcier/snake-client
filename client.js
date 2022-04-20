const net = require("net");
const { IP, PORT } = require('./constants.js');

//connect function will establish a connection with the server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.on('data', (data) => {
    console.log(data);
  });
  conn.on('connect', () => {
    console.log("Successfully connected to game server.");
    conn.write("Name: MB");
  });
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;