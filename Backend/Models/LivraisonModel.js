const { Model, Sequelize } = require('sequelize');
const sequelize = require('../Database/Config.js')
class Livraisons extends Model {}
Livraisons.init({
 status: Sequelize.STRING,
 clientName: Sequelize.STRING,
 clientId: Sequelize.INTEGER,
 productId: Sequelize.INTEGER,
 quantity: Sequelize.INTEGER,
}, { sequelize, modelName: 'livraisons' });

module.exports = Livraisons;