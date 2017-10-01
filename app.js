require('dotenv').config();
var server = require('./express');
var PORT = process.env.PORT || 3000;
var config = require('./config');
var db = require('./sequelize');
db.sequelize.sync().then(() => {
  server.listen(PORT);
});
