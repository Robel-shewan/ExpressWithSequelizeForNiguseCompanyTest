const express = require("express");

const {
  createPurchases,
  getAllPurchases,
  getPurchases,
} = require("../controllers/PurchaseController");
const { check, validationResult } = require("express-validator");

const router = express.Router();

router.route("/:id").post(
  check("quantity", "purchased_quantity is required").notEmpty().isNumeric(),
  check("price", "purchased_price_per_piece is required")
    .notEmpty()
    .isNumeric(),
  // check("ProductId", "productId is required").notEmpty().isNumeric(),
  createPurchases
);
router.route("/").get(getPurchases);

module.exports = router;
