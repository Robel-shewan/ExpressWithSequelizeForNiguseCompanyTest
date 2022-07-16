const asyncHandler = require("express-async-handler");
const Product = require("../models").product;

const { validationResult } = require("express-validator");
const purchase = require("../models/purchase");

// create the products
const addProduct = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let info = {
    name: req.body.name,
    description: req.body.description,
    quantity_on_stock: req.body.quantity_on_stock,
  };

  const product = await Product.create(info);
  res.status(200).send(product);
});

// Get Product
const getProduct = asyncHandler(async (req, res, next) => {
  const productId = req.params.id;
  const product = await Product.findOne({ where: { id: productId } });
  if (!product) return res.status(404).send("Not Found the Product");
  res.status(200).send(product);
});

const getAllProducts = asyncHandler(async (req, res, next) => {
  // const pageSize = req.body.startPostion;
  // const page = Number(req.body.maxResult) || 1;

  // For the Date1 is it present
  // if(req.body.data1!==undefined && req.body.data2==undefined){

  // }

  // For the Data2 is it present
  //  else (req.body.data1==undefined && req.body.data2!==undefined){

  //   }

  const products = await Product.findAll({});

  res.status(200).json({ products });
});

const deleteProduct = asyncHandler(async (req, res, next) => {
  const productId = req.params.id;
  const product = await Product.destroy({ where: { id: productId } });
  if (product == 0) return res.status(404).send("Not found the Product");
  res.status(200).json(product);
});

module.exports = {
  addProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
};
