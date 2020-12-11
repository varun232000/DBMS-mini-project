const express = require("express");
const productsRepo = require("../repositories/products");
const productsIndexTemplate = require("../views/products/index");
const mysqlConnection = require("../db/db_config");
const router = express.Router();

router.get("/", (req, res) => {
  const stmt = "SELECT * from products";
  mysqlConnection.query(stmt, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(productsIndexTemplate({ products: result }));
  });
});

module.exports = router;
