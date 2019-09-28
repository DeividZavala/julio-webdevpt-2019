const User = require("../models/User");
const { Strategy: LocalStrategy } = require("passport-local");
const passport = require("passport");

passport.use(new LocalStrategy(User.createStrategy()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
