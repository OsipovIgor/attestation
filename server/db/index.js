const { Client } = require("pg");
const config = require("../../configs/db");

const client = new Client(config);

client.connect();

module.exports = {
  query: (text, params, callback) => {
    client.query(text, params, callback);
  }
};
