require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;

const server_uri =  process.env.MONGO_URI
const client = new MongoClient(server_uri);
let connection;

async function connect() {
  if (!connection) {
    connection = await client.connect();
  }

  return connection;
}

module.exports = { connect };