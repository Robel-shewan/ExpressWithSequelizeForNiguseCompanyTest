const Purchase = require("./purchase");

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

  Product.associate = function (models) {
    Product.hasOne(models.Purchase);
  };
  return Product;
};
