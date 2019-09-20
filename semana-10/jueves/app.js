const express = require("express");
const mongoose = require("mongoose");
const Perro = require("./models/Perro");

mongoose
  .connect("mongodb://localhost/mi-base", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Conectado a la base de datos ${x.connections[0].name}`)
  )
  .catch(err => console.log(err));

function createPerro() {
  Perro.create({ name: "Maia", age: 3, hasOwner: true })
    .then(perro => console.log(perro))
    .catch(err => console.log(err));
}

function getPerros() {
  Perro.find().then(perros => console.log(perros));
}

function updatePerro() {
  Perro.findOneAndUpdate(
    { name: "Panzeer" },
    { age: 7, name: "Panzer" },
    { new: true }
  ).then(perro => console.log(perro));
}

function deletePerro() {
  Perro.findOneAndDelete({ name: "Nepomuseno" }).then(perro =>
    console.log(`${perro.name} dice: No me quiero ir señor`)
  );
}

const app = express();

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("Corriendo en el 3000 papud");
});
