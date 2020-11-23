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


  let createAdmin = `create table if not exists admins(
    admin_id int primary key auto_increment,
    admin_phone_number int(10),
    password varchar(50),
    email varchar(50) unique
  )`;
  connection.query(createAdmin, function (err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });
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
});

module.exports = connection;
