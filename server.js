const express = require('express');
const accountRoutes = require('./accounts/accountRoutes.js')
const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.use('/api/accounts', accountRoutes);

server.get('/', (req, res) => {
  res.send('<h1>Welcome to Accounts API</h1>')
})

module.exports = server;