'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderProdutcs = sequelize.define('OrderProdutcs', {
    OrderId: DataTypes.STRING,
    productId: DataTypes.STRING
  }, {});
  OrderProdutcs.associate = function (models) {
    OrderProdutcs.belongsTo(models.Product, {
      foreingKey: 'productId'
    })

    OrderProdutcs.belongsTo(models.Orders, {
      foreingKey: 'OrderId'
    })
  };
  return OrderProdutcs;
};
