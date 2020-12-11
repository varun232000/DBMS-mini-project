const sqlConnection = require("./db_config");

const createTable = (qStmt) => {
  sqlConnection.query(qStmt, (error) => {
    if (error) {
      console.log(error.message);
    }
  });
};

(() => {
  // creates seller table
  let createSellerTable = `create table if not exists sellers(
      seller_id int primary key auto_increment,
      seller_phone_number int(10),
      seller_name varchar(50) ,
      seller_address varchar(50)
  )`;
  createTable(createSellerTable);

  // Creates admin table
  let createAdminTable = `create table if not exists admins(
      admin_id int primary key auto_increment,
      admin_phone_number int(10),
      password varchar(50),
      email varchar(50) unique
    )`;
  createTable(createAdminTable);

  // Products table creation
  const createProductsTable = `create table if not exists products(
  product_id int primary key auto_increment,
  title varchar(50) unique,
  price int,
  image varchar(100),
  stock int(3) default 10,
  description varchar(200)
  )`;
  createTable(createProductsTable);
})();
