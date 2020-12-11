const express = require("express");
const router = express.Router();
const connection = require("../db/db_config");
const sellersTemplate = require("../views/sellers/sellers");

router.get("/sellers", (req, res) => {
  const stmt = `select * from sellers`;

  // const data2 = [seller_id,name,phone_no,street,city,zip_code];
  // console.log(data2)
  connection.query(stmt, (error, results, fields) => {
    if (error) {
      console.log(err);
    }
    // return res.render("/sellers",{ title: "seller list", data2:"data2" });
    return res.send(sellersTemplate({ sellers: results }));
  });
});

module.exports = router;
