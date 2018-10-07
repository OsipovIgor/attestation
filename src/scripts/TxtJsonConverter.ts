import { readFile } from "fs";

type Platform = {
  name: string,
  sections: Section[];
}

type Section = {
  name: string,
  knowledges: string[]
}

/**
 * Конвертор данных для бд из TXT в JSON
 *
 * @class Converter
 */
export class Converter {

  private platforms: string[] = [];
  public json: Platform[] = [];

  constructor(platforms: string[]) {
    this.platforms = platforms;
  }

  public process() {
    this.platforms.forEach(this.platformHandler);
  }

  //#region handlers

  private platformHandler = (platformName: string): void => {

    readFile(`../initial_data/${platformName}.txt`, "utf8", (err: NodeJS.ErrnoException, data: string) => {
      if (err) throw new Error(err.message);

      const platform: Platform = {
        name: platformName,
        sections: this.getSections(data.split('\r'))
      };

      this.json.push(platform);

    })
  }

  //#endregion

  //#region utils

  private getSections(raw: string[]): Section[] {
    const sections: Section[] = [];
    const getLastStr = (str: string): string => str.length && str[str.length - 1];

    for (let i = 0; i < raw.length;) {
      let value = raw[i];

      if (getLastStr(value) === ":") {
        const section: Section = {
          name: value.slice(0, -1),
          knowledges: []
        };
        value = raw[++i];
        while (getLastStr(value) !== ":" && i < raw.length) {
          section.knowledges.push(value);
          value = raw[++i];
        }

        sections.push(section);
      }
    }

    return sections;
  }

  //#endregion
}

const converter = new Converter([
  ".NET AO5 EDO",
  ".NET AO5 Core",
  "Веб-регистратор",
  "GO",
  "PHP",
  ".NET AO4"
]);

converter.process();
process.stdout.write(JSON.stringify(converter.json));