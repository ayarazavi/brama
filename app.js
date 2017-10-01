require('dotenv').config();
var server = require('./express');
var PORT = process.env.PORT || 3000;
var config = require('./config');

server.listen(PORT);
