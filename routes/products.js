const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get("/products", productsController.getProducts);

router.post("/product", productsController.addProduct);

router.put("/product", () => {});

router.delete("/product", () => {});

module.exports = router;
