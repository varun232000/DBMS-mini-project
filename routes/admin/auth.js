const express = require("express");

const { handleErrors } = require("./middlewares");
const usersRepo = require("../../repositories/users");
const signupTemplate = require("../../views/admin/auth/signup");
const signinTemplate = require("../../views/admin/auth/signin");
const signupTemplateuser = require("../../views/admin/auth/signupuser");
const sellersTemplate = require("../../views/sellers/sellers");
const adminSignInTemplate = require("../../views/admin/auth/adminSignIn");
const crypto = require("crypto");

const {
  requireEmail,
  requirePassword,
  requirePasswordConfirmation,
  requireEmailExists,
  requireValidPasswordForUser,
} = require("./validators");
const connection = require("../../db/db_config");

const router = express.Router();

router.get("/admin/signup", (req, res) => {
  res.send(signupTemplate({ req }));
});

router.post(
  "/admin/signup",
  [requireEmail, requirePassword, requirePasswordConfirmation],
  (req, res) => {
    const { email, password } = req.body;
    const stmt = `INSERT INTO admins(email, password) VALUES(?,?)`;
    // crypto.get
    const encryptedPassword = crypto
      .createHmac("sha256", password)
      .update(process.env.CRYPTO_PASSWORD)
      .digest("hex");
    const data = [email, encryptedPassword];

    connection.query(stmt, data, (error, results, fields) => {
      if (error) {
        return res.send(signupTemplate({ errors: error.sqlMessage }));
      }
      return res.redirect("/admin/products");
    });
  }
);

router.get("/user/signup", (req, res) => {
  res.send(signupTemplateuser({ req }));
});

router.post(
  "/user/signup",
  [requireEmail, requirePassword, requirePasswordConfirmation],
  (req, res) => {
    const {
      fname,
      lname,
      email,
      password,
      u_phone_no,
      gender,
      house_no,
      street,
      city,
      zip,
    } = req.body;
    const encryptedPassword = crypto
      .createHmac("sha256", password)
      .update(process.env.CRYPTO_PASSWORD)
      .digest("hex");

    const stmt1 = `INSERT INTO users(fname,lname,email,password,u_phone_no,gender,house_no,street,city,zip) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const data1 = [
      fname,
      lname,
      email,
      encryptedPassword,
      u_phone_no,
      gender,
      house_no,
      street,
      city,
      zip,
    ];
    connection.query(stmt1, data1, (error, results, fields) => {
      if (error) {
        return res.send(signupTemplate({ errors: error.sqlMessage }));
      }
      res.redirect("/");
    });
  }
);

router.get("/signout", (req, res) => {
  req.session = null;
  res.send("You are logged out");
});

router.get("/user/signin", (req, res) => {
  res.send(signinTemplate({}));
});

router.post(
  "/user/signin",
  // [requireEmailExists, requireValidPasswordForUser],
  handleErrors(signinTemplate),
  (req, res) => {
    const { email, password } = req.body;
    const encryptedPassword = crypto
      .createHmac("sha256", password)
      .update(process.env.CRYPTO_PASSWORD)
      .digest("hex");
    const enter = `SELECT email,password from users where email = "${email}" and password = "${encryptedPassword}"`;

    connection.query(enter, [email, password], (error, results, fields) => {
      if (error) {
        return res.send(signinTemplate({ errors: error.sqlMessage }));
      } else if (results.length < 1) {
        return res.send(signinTemplate({ errors: "can't find the user" }));
      }
      return res.redirect("/");
    });
    // const user = await usersRepo.getOneBy({ email });
    // req.session.userId = user.id;
  }
);

router.post("/admin/signin", (req, res) => {
  const { email, password } = req.body;
  const encryptedPassword = crypto
    .createHmac("sha256", password)
    .update(process.env.CRYPTO_PASSWORD)
    .digest("hex");
  console.log(encryptedPassword);
  const stmt =
    "SELECT EMAIL, PASSWORD FROM ADMINS WHERE EMAIL=? AND PASSWORD=?";
  connection.query(stmt, [email, encryptedPassword], (err, result) => {
    if (err) {
      console.log(err);
      return res.redirect("/admin/signin");
    }
    if (result.length < 1) {
      return res.redirect("/admin/signin");
    }
    return res.redirect("/admin/products");
  });
});

router.get("/admin/signin", (req, res) => {
  return res.send(adminSignInTemplate({}));
});

module.exports = router;
