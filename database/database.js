const Sequelize = require('sequelize');

const connection = new Sequelize('projetoforum','root','Leandro14',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;