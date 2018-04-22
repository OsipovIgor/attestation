module.exports = {
  getSections: rawData => {
    const sections = [];
    const getLastStr = str => str && str.length && str[str.length - 1];

    for (let i = 0; i < rawData.length; ) {
      let value = rawData[i];

      if (getLastStr(value) === ":") {
        const section = {
          name: value.slice(0, -1),
          knowledges: []
        };
        value = rawData[++i];
        while (getLastStr(value) !== ":" && i < rawData.length) {
          section.knowledges.push(value);
          value = rawData[++i];
        }

        sections.push(section);
      }
    }

    return sections;
  }
};
