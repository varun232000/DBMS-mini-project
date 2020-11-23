// const connection = require("../db_config");

// console.log(connection);
// connection.connect((e) => {
//   if (e) {
//     console.log(e);
//   }

//   let createAdmin = `create table if not exists admins(
//     admin_id int primary key auto_increment,
//     admin_phone_number int(10),
//     password varchar(50),
//     email varchar(50),
//   )`;

//   connection.query(createAdmin, function (err, results, fields) {
//     if (err) {
//       console.log(err.message);
//     }
//   });

//   connection.end(function (err) {
//     if (err) {
//       return console.log(err.message);
//     }
//   });
// });
