const fs = require("fs");

const db = require("./db");
const { getSections } = require("./utils");
const { insertSection, insertKnowledge, insertPlatform } = require("./queries");

module.exports = () => {
  [
    ".NET AO5 EDO",
    ".NET AO5 Core",
    "Веб-регистратор",
    "GO",
    "PHP",
    ".NET AO4"
  ].forEach(item => {
    fs.readFile(`./data/${item}.txt`, "utf8", (err, data) => {
      if (err) throw new Error(err);

      db.query(insertPlatform(item), (err, platforms) => {
        if (err) throw new Error(err);

        const platformId = platforms.rows[0].id;

        const sections = getSections(data.split("\r\n"));

        sections.forEach(section => {
          db.query(insertSection(section.name, platformId), (err, data) => {
            if (err) throw new Error(err);

            const sectionId = data.rows[0].id;

            section.knowledges.forEach(knowledge => {
              db.query(insertKnowledge(knowledge, sectionId), (err, data) => {
                if (err) throw new Error(err);
              });
            });
          });
        });
      });
    });
  });
};
