const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Que pedoo <strong>Morros</strong>");
});

app.get("/cat", (req, res) => {
  res.sendFile(`${__dirname}/views/cat.html`);
});

app.use("*", (req, res) => {
  res.send("Que pedoo <strong>Morros</strong> not found");
});

app.listen(3000, () => {
  console.log("App corriendo en el puerto 3000");
});
