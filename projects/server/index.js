// entrypoint of application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan'); 
const app = express();

// app setup
app.use(morgan('combined'));
app.use(bodyParser.json({type:'*/*'})); // parse incomming request

// server setup
const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
