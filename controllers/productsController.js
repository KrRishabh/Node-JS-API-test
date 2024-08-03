const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  console.log("came into get products route");
  let data = Product.fetchProducts();
  res.status(200).json({ message: "Products fetched.", data: data });
  next();
};

exports.addProduct = (req, res, next) => {
  console.log("came into add product controller");
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const desc = req.body.desc;
  const id = new Date().getTime();
  const currProduct = new Product(id, title, imageUrl, desc, price);
  currProduct.save();
  res.status(202).json({ message: "Product created!", data: [] });
  next();
};
