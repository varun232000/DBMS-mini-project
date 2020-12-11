const express = require("express");
const multer = require("multer");

const { handleErrors, requireAuth } = require("./middlewares");
const productsRepo = require("../../repositories/products");
const productsNewTemplate = require("../../views/admin/products/new");
const productsIndexTemplate = require("../../views/admin/products/index");
const productsEditTemplate = require("../../views/admin/products/edit");
const { requireTitle, requirePrice } = require("./validators");
const productUpdateTemplate = require("../../views/admin/products/productUpdated");
const mysqlConnection = require("../../db/db_config");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/products/");
  },
  filename: function (req, file, cb) {
    cb(null, `${parseInt(Math.random(0, 1) * 100)}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.get("/admin/products", (req, res) => {
  const stmt = "Select * from products";
  mysqlConnection.query(stmt, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    const products = results;
    res.send(productsIndexTemplate({ products }));
  });
});

router.get("/admin/products/new", (req, res) => {
  res.send(productsNewTemplate({}));
});

router.post("/admin/products/new", upload.single("image"), (req, res) => {
  const { title, price } = req.body;
  const image = !!req.file ? req.file.filename : "placeholder.jpg";

  const query = `INSERT INTO products (title, price, image) VALUES(?, ?, ?)`;
  const data = [title, price, image];

  mysqlConnection.query(query, data, (error) => {
    if (error) {
      console.log(error.message);
      return res.send(productsNewTemplate({ error }));
    }
    return res.redirect("/admin/products");
  });
});

router.get("/admin/products/:id/edit", (req, res) => {
  const stmt = `SELECT * from products where product_id = ?`;
  mysqlConnection.query(stmt, req.params.id, (err, result = []) => {
    if (err) {
      console.log(err);
      res.send(productsNewTemplate({ err }));
    }
    res.send(productsEditTemplate({ product: result[0] }));
  });
});

router.post("/admin/products/:id/edit", (req, res) => {
  const mysqlStmt = `SELECT * FROM products where product_id=?`;
  console.log("calling me?");
  mysqlConnection.query(mysqlStmt, req.params.id, (err, result) => {
    if (err) {
      return res.send("Could not find item");
    }
    const product = result[0];
    const title = req.body.title || product.title;
    const price = req.body.price || product.price;

    const stmt = `UPDATE products SET title = ?, price=? WHERE product_id = ?`;
    mysqlConnection.query(
      stmt,
      [title, price, req.params.id],
      (err, result) => {
        if (err) {
          console.log(err);
        }

        res.redirect("/admin/products");
      }
    );
  });
});

router.post("/admin/products/:id/delete", (req, res) => {
  let stmt = `DELETE FROM products WHERE product_id = ?`;
  mysqlConnection.query(stmt, req.params.id, (err, result) => {
    if (err) {
      console.log();
      res.send(productUpdateTemplate({ statement: err.sqlMessage }));
    }
    res.redirect("/admin/products");
  });
});

module.exports = router;
