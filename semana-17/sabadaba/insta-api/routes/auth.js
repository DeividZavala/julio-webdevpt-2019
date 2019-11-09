const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/login", (req, res, next) => {});

router.route("/form/:id").post();

router.get("/signup");
module.exports = router;
