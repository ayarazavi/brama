require('dotenv').config();
var db = require('./sequelize');
var server = require('./express')(db);
var PORT = process.env.PORT || 3000;
var config = require('./config');

db.sequelize.sync().then(() => {
  server.listen(PORT);
});
