const express = require("express");
const router = express.Router();
const Reservation = require("../models/Reservation");
const { verifyToken } = require("../helpers/auth");

router.get("/", verifyToken, (req, res) => {
  const { user } = req;
  Reservation.find({ owner: user._id })
    .populate("guest", "username profilepic")
    .populate("property", "title price coordinates address images")
    .then(reservations => {
      res.status(200).json({ reservations });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

router.post("/", verifyToken, (req, res) => {
  const { user } = req;
  Reservation.create({ ...req.body, guest: user._id })
    .populate("guest", "username profilepic")
    .populate("property", "title price coordinates address images")
    .then(reservation => {
      // Reservation.populate(Reservation, {
      //   path: "owner",
      //   select: "username profilepic"
      // });
      res.status(200).json({ reservation });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

router.get("/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  Reservation.findById(id)
    .populate("guest", "username profilepic")
    .populate("property", "title price coordinates address images")
    .then(reservation => {
      res.status(200).json({ reservation });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

router.patch("/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  Reservation.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true })
    .populate("guest", "username profilepic")
    .populate("property", "title price coordinates address images")
    .then(reservation => {
      res.status(200).json({ reservation });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

router.delete("/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  Reservation.findByIdAndRemove(id)
    .then(reservation => {
      res.status(200).json({ reservation });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

module.exports = router;
