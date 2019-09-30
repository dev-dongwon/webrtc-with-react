"use strict";

var http = require('http');

var app = require('./server/app');

var express = require('express');

var path = require('path');

app.use(express["static"](path.join(__dirname, 'client', 'build')));
var PORT = process.env.PORT || 5000;
var server = http.createServer(app);
server.listen(PORT);
