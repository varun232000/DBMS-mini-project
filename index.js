const express = require("express");
const bodyParser = require("body-parser");
// const cookieSession = require("cookie-session");
const authRouter = require("./routes/admin/auth");
const adminProductsRouter = require("./routes/admin/products");
const productsRouter = require("./routes/products");
const cartsRouter = require("./routes/carts");
const sellerRouter = require("./routes/sellers");
const session = require("express-session");

require("./db/db_config");
const dotenv = require("dotenv");
require("./db/tableCreation");
const multer = require("multer");

const app = express();
dotenv.config();
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(
//   cookieSession({
//     keys: ["lkasld235j"],
//   })
// );

// Routers
app.use(authRouter);
app.use(productsRouter);
app.use(adminProductsRouter);
app.use(cartsRouter);
app.use(sellerRouter);

// multer setup
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/images");
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname);
  },
});

// Server Setup
app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});
