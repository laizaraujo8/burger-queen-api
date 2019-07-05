'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    uid: DataTypes.INTEGER
  }, {});
  Orders.associate = function(models) {
      Orders.belongsTo(models.User, {
        foreignKey: "uid"
      });
      Orders.hasMany(models.OrderProdutcs, {
        foreignKey: "orderId"
      });
  };
  return Orders;
};

