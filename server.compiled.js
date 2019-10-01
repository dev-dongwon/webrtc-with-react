"use strict";

var http = require('http');

var app = require('./server/app');

var PORT = process.env.PORT || 5000;
var server = http.createServer(app);
server.listen(PORT);
