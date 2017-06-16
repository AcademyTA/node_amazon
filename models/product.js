'use strict';
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DOUBLE
  });

  Product.associate = function({ Review }) {
    Product.hasMany(Review)
  }

  return Product;
};
