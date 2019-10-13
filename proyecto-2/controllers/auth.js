const passport = require("../helpers/passport");
const User = require("../models/User");

exports.login = (req, res) => {
  passport.authenticate("local", (err, user, info = {}) => {
    const { message: errorMessage } = info;
    if (errorMessage) {
      return res.render("login", { errorMessage });
    }

    req.login(user, err => {
      res.redirect("/profile");
    });
  })(req, res);
};

exports.signup = (req, res) => {
  let { username, password, email } = req.body;

  if (password !== req.body["confirm-pass"]) {
    let errorMessage = "Make sure to enter the same password";
    return res.render("register", { title: "Sign Up", errorMessage });
  }

  if (!username || !password || !email) {
    let errorMessage = "Username, e-mail and password are required";
    return res.render("register", { title: "Sign Up", errorMessage });
  }

  User.register({ username, email }, password)
    .then(usr => {
      req.login(usr, errorMessage => {
        if (errorMessage)
          return res.render("register", { title: "Sign Up", errorMessage });
        res.redirect("/home");
      });
    })
    .catch(errorMessage =>
      res.render("register", { title: "Sign Up", errorMessage })
    );
};
