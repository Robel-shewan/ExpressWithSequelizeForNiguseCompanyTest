const asyncHandler = require("express-async-handler");
const db = require("../models");
const Purchase = db.purchases;
const Product = db.products;

const { validationResult } = require("express-validator");

// create the purchases

const createPurchases = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const product = await Product.findOne({ where: { id: req.params.id } });
  if (!product) return res.status(200).send("The product is not found ");
  const id = req.params.id;
  const value = parseInt(id);
  let data = {
    purchased_quantity: req.body.purchased_quantity,
    purchased_price_per_piece: req.body.purchased_price_per_piece,
    productId: 3,
  };

  const purchase = await Purchase.create(data);
  res.status(200).send(purchase);
});

module.exports = {
  createPurchases,
};
