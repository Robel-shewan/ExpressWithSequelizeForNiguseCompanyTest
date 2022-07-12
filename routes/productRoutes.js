const express = require("express");

const {
  addProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
} = require("../controllers/productController");
const { check, validationResult } = require("express-validator");

const router = express.Router();

router
  .route("/")
  .get(getAllProducts)

  .post(
    check("title", "Title is required").notEmpty().isString(),
    check("description", "description is required").notEmpty(),
    check("quantity_on_stock", "quantity_on_stock is required").notEmpty(),
    addProduct
  );
router.route("/:id").get(getProduct).delete(deleteProduct);

module.exports = router;
