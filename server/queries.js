module.exports = {
  insertSection: (name, platformId) => {
    return `
        INSERT INTO sections (name, platform_id)
        VALUES ('${name}', '${platformId}')
        RETURNING id
    `;
  },
  insertKnowledge: (name, sectionId) => {
    return `
        INSERT INTO knowledges (name, section_id)
        VALUES ('${name}', '${sectionId}')
      `;
  },
  insertPlatform: name => {
    return `
        INSERT INTO platforms (name)
        VALUES ('${name}')
        RETURNING id
      `;
  },
  getUserByGoogleId: googleId => {
    return `
        SELECT name, surname, email, access_token
        FROM users
        WHERE google_id = '${googleId}'
    `;
  },
  createUser: (name, surname, email, googleId, accessToken) => {
    console.log("name", name);
    return `
      INSERT INTO users (name, surname, email, google_id, access_token)
      VALUES('${name}', '${surname}', '${email}', '${googleId}', '${accessToken}')
      RETURNING name, surname, email, access_token
    `;
  }
};
