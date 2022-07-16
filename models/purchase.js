module.exports = (sequelize, Sequelize) => {
  const Purchase = sequelize.define("Purchase", {
    quantity: {
      type: Sequelize.INTEGER,
    },
    price: {
      type: Sequelize.INTEGER,
    },
  });

  Purchase.associate = function (models) {
    Purchase.belongsTo(models.product);
  };

  return Purchase;
};
