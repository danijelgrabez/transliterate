import { characterObject } from "./langmap";

export enum ConvertDirection {
  toLatin = 'cyrilic',
  toCyrilic = 'latin'
}

export const remapSelection = (string: string, dir: ConvertDirection) => {
  for (let i = 0; i < string.length; i++) {
    const currentLetter: string = characterObject[dir][string[i]] || string[i];
    string = string.replace(string[i], currentLetter);
  }

  return string;
};
