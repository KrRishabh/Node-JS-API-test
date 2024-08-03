const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const productsRoute = require("./routes/products");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/", productsRoute);

app.use((error, req, res, next) => {
  console.log("error - ", error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.send(status).json({ message: message });
});

app.listen(8080);
