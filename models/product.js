const purchase = require("./purchase");

module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    quantity_on_stock: {
      type: Sequelize.INTEGER,
    },
  });

  return Product;
};
