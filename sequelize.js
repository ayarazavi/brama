var Sequelize = require('sequelize');
var config = require('./config');


// var sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
//   host: config.db.host,
//   dialect: 'mysql',
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000,
//   },
// });

const sequelize = new Sequelize(config.db.connectionString);
var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require('./models/user')(sequelize, Sequelize);
module.exports = db;
