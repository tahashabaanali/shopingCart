const Sequelize = require('sequelize');

sequelize = new Sequelize('node-complete', 'root', 'Taha7008', {
  host: 'localhost',
  dialect: 'mysql', // Or any other supported database dialect
});

module.exports = sequelize;
