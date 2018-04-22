const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const { getPlatforms } = require("./dbManager");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = require("express-promise-router")();

router.get("/", (req, res) => {
  res.send("<h1>Приложение запущено!</h1>");
});

router.get("/platforms", (req, res) => {
  getPlatforms().then(response => {
    res.json(response);
  });
});

/**
 * Заполнить БД данными
 */
router.get("/create_data", (req, res) => {
  require("./createDbData")();
  res.send(null);
});

router.post("/add_user", (req, res) => {});

app.use("/api", router);

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
