const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const User = require("../models/User");
const bcrypt = require("bcrypt");

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  User.findById(id)
    .then(user => {
      cb(null, user);
    })
    .catch(err => {
      cb(err);
    });
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    (email, password, next) => {
      User.findOne({ email })
        .then(user => {
          if (!user) {
            return next(null, false, { message: "Incorrect email" });
          }

          const isValidPass = bcrypt.compareSync(password, user.password);

          if (!isValidPass) {
            return next(null, false, { message: "Incorrect password" });
          }

          return next(null, user);
        })
        .catch(err => next(err));
    }
  )
);

module.exports = passport;
