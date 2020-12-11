var mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

connection.connect(function (err) {
  if (err) throw err;

  console.log(`Connected to mysql database ${process.env.DATABASE}`);

  let createuser = `create table if not exists USERS(
    user_id int primary key auto_increment,
    fname varchar(10),
    lname varchar(50),
    email varchar(50) unique,
    password varchar(10),
    u_phone_no int(10),
    gender varchar(6),
    house_no int(5),
    street varchar(20),
    city varchar(20),
    zip int(6)
    )`;
  connection.query(createuser, function (err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });
  const sellers = `create table if not exists sellers(
    seller_id int primary key auto_increment,
    name varchar(50),
    phone_no int(11),
    street varchar(50),
    city varchar(50),
    zip_code int(6)
  )`;

  connection.query(sellers, function (err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });

  let createcart = `create table if not exists cart(
    product_id int primary key unique,
    quantity int(2),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
   )`;
  connection.query(createcart, function (err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });
});

module.exports = connection;
