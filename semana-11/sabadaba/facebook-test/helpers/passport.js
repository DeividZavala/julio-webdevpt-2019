const passport = require("passport");
const { Strategy: FacebookStrategy } = require("passport-facebook");
const User = require("../models/User");

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FBID,
      clientSecret: process.env.FBSECRET,
      callbackURL: "http://localhost:3000/facebook/callback"
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(profile);

      User.findOne({ facebookId: profile.id })
        .then(user => {
          if (user) {
            return cb(null, user);
          }

          const { id, displayName } = profile;

          User.create({ facebookId: id, displayName })
            .then(user => {
              cb(null, user);
            })
            .catch(err => cb(err));
        })
        .catch(err => cb(err));
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  User.findById(id)
    .then(user => {
      cb(null, user);
    })
    .catch(err => cb(err));
});

module.exports = passport;
