const db = require("./db");
const { getUserByGoogleId, createUser } = require("./queries");

module.exports = {
  /**
   * Список всех платформ
   */
  getPlatforms: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * from platforms", (err, data) => {
        if (err) reject(err);

        resolve(data.rows);
      });
    });
  },

  /**
   * Получить пользователя по Google ID
   */
  getUser: googleId => {
    return new Promise((resolve, reject) => {
      db.query(getUserByGoogleId(googleId), (err, data) => {
        if (err) reject(err);
        const user = data.rows.length ? data.rows[0] : null;

        resolve(user);
      });
    });
  },

  /**
   * Создать нового пользователя
   */
  createUser: (...userInfo) => {
    return new Promise((resolve, reject) => {
      db.query(createUser(...userInfo), (err, data) => {
        if (err) reject(err);

        const user = data.rows.length ? data.rows[0] : null;

        resolve(user);
      });
    });
  }
};
