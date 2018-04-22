const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = require("express-promise-router")();

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
