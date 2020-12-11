const express = require("express");

const { handleErrors } = require("./middlewares");
const usersRepo = require("../../repositories/users");
const signupTemplate = require("../../views/admin/auth/signup");
const signinTemplate = require("../../views/admin/auth/signin");
const signupTemplateuser = require("../../views/admin/auth/signupuser");
const sellersTemplate = require("../../views/sellers/sellers");

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
    const data = [email, password];

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

    const stmt1 = `INSERT INTO users(fname,lname,email,password,u_phone_no,gender,house_no,street,city,zip) values("${fname}","${lname}","${email}","${password}",${u_phone_no},"${gender}",${house_no},"${street}","${city}",${zip})`;
    const data1 = [
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
    const enter = `SELECT email,password from users where email = "${email}" and password = "${password}"`;

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

// router.post("/cart", (req,res)=>{

// })
module.exports = router;
