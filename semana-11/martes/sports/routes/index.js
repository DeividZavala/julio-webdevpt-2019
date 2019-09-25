const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

/* GET home page */
router.get("/", (req, res, next) => {
  Event.find().then(events => {
    res.render("home", { title: "Eventos", events });
  });
});

router.get("/edit/:id", (req, res) => {
  const { id } = req.params;
  Event.findById(id).then(event => {
    res.render("update", { event });
  });
});

router.post("/edit/:id", (req, res) => {
  const { id } = req.params;
  const event = { ...req.body };
  console.log(event);
  Event.findByIdAndUpdate(id, { $set: event }).then(() => {
    res.redirect("/");
  });
});

router.get("/new-event", (req, res) => {
  res.render("new-event", { title: "Nuevo Evento" });
});

router.post("/new-event", (req, res) => {
  const event = { ...req.body, participants: req.body.participants.split(",") };

  Event.create(event)
    .then(() => res.redirect("/"))
    .catch(err => console.log(err));
});

module.exports = router;
