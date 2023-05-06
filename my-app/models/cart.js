'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Dog_toys}) {
      // define association here
      // Cart.hasMany(Dog_toys, {foreignKey: 'barcode'});
      // Cart.belongsTo(Dog_treats, {foreignKey: 'barcode'});
      Cart.hasMany(Dog_toys, {foreignKey: 'barcode'});
      // Cart.belongsTo(User, {foreignKey: 'email'})
    }
  }
  Cart.init(
    {
      barcode:{
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: true
      },
      price:{
        type: DataTypes.INTEGER,
        allowNull: true
      },
      image: {
        type: DataTypes.STRING,
        allowNullL: true
      }
  }, 
  {
    sequelize,
    modelName: 'Cart',
    tableName: "carts",
    timestamps: false
  });
  return Cart;
};