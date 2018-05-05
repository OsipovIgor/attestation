const path = require("path");
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const router = require("./router");

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Google Strategy
passport.use(require("./auth/googleStrategy"));

const app = express();

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session(require("../configs/session")));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 1371;

app.use("/api", router);

app.get(
  "/auth",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/plus.login",
      "https://www.googleapis.com/auth/plus.profile.emails.read"
    ]
  })
);

app.get("/", (req, res) => {
  res.send("Стартовая страница");
});

app.get("/login", (req, res) => {
  res.json("Ошибка");
});

app.get("/logout", (req, res) => {
  res.logout();
});

app.get("/getMe", ensureAuthenticated, (req, res) => {
  res.json(req.user);
});

app.get("/account", ensureAuthenticated, (req, res) => {
  res.redirect("http://localhost:3000/");
});

app.get(
  "/auth/callback",
  passport.authenticate("google", {
    successRedirect: "/account",
    failureRedirect: "/login"
  })
);

app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`);
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}
