const Product = require("./product");

module.exports = (sequelize, Sequelize) => {
  const Purchase = sequelize.define("purchases", {
    purchased_quantity: {
      type: Sequelize.INTEGER,
    },
    purchased_price_per_piece: {
      type: Sequelize.INTEGER,
    },
  });

  return Purchase;
};
