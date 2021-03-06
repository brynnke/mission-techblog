// imp sequelize constructor
const { promisify } = require('bluebird');
const sequelize = require('sequelize');
require('dotnev').config();

let sequelize;

if(process.env.JAWSDB_URL) {
    sequelize = new sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3001
    });
}

module.exports = sequelize;