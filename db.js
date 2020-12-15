const { Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.db.url, {
  dialect: 'mysql',
});

module.exports.sequelize = sequelize;

module.exports.connectDb = async () => {
  await sequelize.authenticate();
  console.log('Connected to DB');
}
