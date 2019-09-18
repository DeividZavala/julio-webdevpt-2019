const express = require("express");

const app = express();

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

app.use(express.static("public"));

app.get("/", (req, res) => {
  let data = {
    titulo: "Mi pag con pug bien chida",
    valid: true,
    friends: 1000000
  };
  res.render("vista", data);
});

app.get("/login", (req, res) => {
  let data = {
    titulo: "login",
    valid: false,
    friends: 1000000
  };
  res.render("home", data);
});

app.get("/lanueva", (req, res) => {
  res.render("create", {
    titulo: "La vista de create",
    morros: [
      {
        name: "Ivan",
        age: 40
      },
      {
        name: "Pat",
        age: 23
      },
      {
        name: "Angel",
        age: 15
      }
    ]
  });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
