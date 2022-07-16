const asyncHandler = require("express-async-handler");
const db = require("../models");
const Purchase = db.Purchase;
const Product = db.product;

const { validationResult } = require("express-validator");

// create the purchases

const createPurchases = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const id = req.params.id;

  const product = await Product.findOne({ where: { id } });

  if (!product) return res.status(200).send("The product is not found ");

  let data = {
    quantity: req.body.quantity,
    price: req.body.price,
    productId: id,
  };
  product;

  const purchase = await Purchase.create(data);
  res.status(200).send(purchase);
});
const getPurchases = asyncHandler(async (req, res, next) => {
  const purhcase = await Purchase.findAll({
    include: [
      {
        model: Product,
        required: true,
      },
    ],
  });
  return res.status(200).send(purhcase);
});

module.exports = {
  createPurchases,
  getPurchases,
};
