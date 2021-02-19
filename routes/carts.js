const express = require("express");
const cartsRepo = require("../repositories/carts");
const productsRepo = require("../repositories/products");
const cartShowTemplate = require("../views/carts/show");
const orderConfirmedTemplate = require("../views/orderConfirmed");
const connection = require("../db/db_config");

const router = express.Router();

// Receive a post request to add an item to a cart
router.post("/cart/add", (req, res) => {
  if (!req.session.loggedin) {
    console.log(req.session);
    return res.redirect("/user/signin");
  }
  const { product_id } = req.body;
  let productQuantity = 0;
  const selectStmt = "SELECT * FROM cart WHERE product_id=?";

  connection.query(selectStmt, [product_id], (err, result) => {
    let stmt =
      "INSERT INTO cart(quantity, product_id, user_id) VALUES(?, ?, ?)";

    if (result.length > 0) {
      stmt = "UPDATE cart SET quantity=? where product_id=? and user_id=?";
      productQuantity = result[0].quantity;
    }
    console.log("is it working?");
    console.log(stmt, [
      productQuantity + 1,
      Number(product_id),
      req.session.user_id,
    ]);
    connection.query(
      stmt,
      [productQuantity + 1, product_id, req.session.user_id],
      (result, err) => {
        if (err) {
          console.log(err);
        }
        return res.redirect("/");
      }
    );
  });
});

// Receive a GET request to show all items in cart
router.get("/cart", (req, res) => {
  const stmt =
    "SELECT products.title, products.price, cart.quantity, products.product_id FROM products JOIN cart ON products.product_id=cart.product_id";
  connection.query(stmt, (error, products, fields) => {
    if (error) {
      console.log(error);
    }
    return res.send(cartShowTemplate({ products }));
  });
});

router.post("/cart/:id/update", (req, res) => {
  const { quantity } = req.body;

  const stmt =
    quantity < 1
      ? `DELETE FROM cart WHERE  product_id=${req.params.id}`
      : "UPDATE cart SET quantity = ? WHERE product_id = ?";
  connection.query(stmt, [quantity, req.params.id], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/cart");
  });
});

router.get("/order_confirmed", (req, res) => {
  const stmt = `DELETE FROM cart`;
  connection.query(stmt, (err, result) => {
    if (err) {
      console.log(err);
    }
    return res.send(orderConfirmedTemplate({}));
  });
});

module.exports = router;
