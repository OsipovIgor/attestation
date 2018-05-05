const router = require("express-promise-router")();
const { getPlatforms } = require("./dbManager");

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

module.exports = router;
