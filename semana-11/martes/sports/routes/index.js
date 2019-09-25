const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const Participant = require("../models/Participant");

/* GET home page */
router.get("/", (req, res, next) => {
  Event.find().then(events => {
    res.render("home", { title: "Eventos", events });
  });
});

router.get("/edit/:id", (req, res) => {
  const { id } = req.params;
  const eventPromise = Event.findById(id);
  const participantsPromise = Participant.find();
  Promise.all([eventPromise, participantsPromise]).then(response => {
    res.render("update", { event: response[0], participants: response[1] });
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
  Participant.find().then(participants => {
    res.render("new-event", { title: "Nuevo Evento", participants });
  });
});

router.post("/new-event", (req, res) => {
  console.log(req.body);
  const event = { ...req.body };

  Event.create(event)
    .then(() => res.redirect("/"))
    .catch(err => console.log(err));
});

module.exports = router;
