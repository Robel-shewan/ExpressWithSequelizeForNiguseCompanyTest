const express = require("express");

const {
  createPurchases,
  getAllPurchases,
} = require("../controllers/PurchaseController");
const { check, validationResult } = require("express-validator");

const router = express.Router();

router.route("/:id").post(
  check("purchased_quantity", "purchased_quantity is required")
    .notEmpty()
    .isNumeric(),
  check("purchased_price_per_piece", "purchased_price_per_piece is required")
    .notEmpty()
    .isNumeric(),
  // check("ProductId", "productId is required").notEmpty().isNumeric(),
  createPurchases
);

module.exports = router;
