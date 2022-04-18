const { CONNREFUSED } = require("dns");
const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.1.67',
    port: '50541'
  });
  conn.on('data', (data) => {
    console.log(data);
  });
  conn.on('connect', () => {
    console.log("Successfully connected to game server.");
    conn.write("Name: MB");
  });
  // conn.on('connect', (data) => {
  //   conn.write("Move: up", data);
  // });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect };