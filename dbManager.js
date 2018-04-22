const db = require("./db");

module.exports = {
  getPlatforms: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * from platforms", (err, data) => {
        if (err) reject(err);

        resolve(data.rows);
      });
    });
  }
};
