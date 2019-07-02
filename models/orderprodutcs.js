'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderProdutcs = sequelize.define('OrderProdutcs', {
    OrderId: DataTypes.STRING
  }, {});
  OrderProdutcs.associate = function(models) {
    // associations can be defined here
  };
  return OrderProdutcs;
};