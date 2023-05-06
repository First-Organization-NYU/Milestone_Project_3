'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dog_treats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Cart}) {
      // define association here
      // Dog_treats.belongsToMany(Cart, {foreignKey: 'barcode'})
    }
  }
  Dog_treats.init(
    {
      barcode: {
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
      // weight: {
      //   type: DataTypes.INTEGER,
      //   allowNull: true
      // },
      price:{
        type: DataTypes.INTEGER,
        allowNullP: true  
      },
      image: {
        type: DataTypes.STRING,
      }
  }, {
    sequelize,
    modelName: "Dog_treats",
    tableName: "dog_treats",
    timestamps: false
  });
  return Dog_treats;
};