const http = require('http');
const app = require('./server/app');
const express = require('express');
const path = require('path');

app.use(express.static(path.join(__dirname, 'client', 'build')));

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
server.listen(PORT);
