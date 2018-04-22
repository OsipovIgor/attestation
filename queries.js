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
  }
};
