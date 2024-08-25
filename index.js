const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(cookieParser());

app.get("/", function (req, res) {
  //   res.cookie("name", "amana");

  //   bcrypt.genSalt(10, function (err, salt) {
  //     bcrypt.hash("amanahamed", salt, function (err, hash) {
  //       console.log(salt);
  //       console.log(hash);
  //     });
  //   });

  //   bcrypt.compare(
  //     "amanahamed",
  //     "$2b$10$WFaFQNuCuAY6ixNhlWh7z.ZjyZxiNrtMf8JIgQB7hMQmP/JUwOUBW",
  //     function (err, result) {
  //       console.log(result);
  //     }
  //   );

  let token = jwt.sign({ email: "aman@gmail.com" }, "secret");
  //   console.log(token);

  res.cookie("token", token);

  res.send("done");
});

app.get("/read", function (req, res) {
  console.log(req.cookies);
  console.log(req.cookies.token);

  let data = jwt.verify(req.cookies.token, "secret");
  console.log(data);
  res.send("read page");
});

app.listen(3000);
