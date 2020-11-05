import { characterObject } from "./langmap";

export enum ConvertDirection {
  toLatin = 'cyrilic',
  toCyrilic = 'latin'
}

export const remapSelection = (string: string, dir: ConvertDirection) => {
  for (let i = 0; i < string.length; i++) {
    const specialCases = // lj, nj, dj, dž
      (['L', 'l', 'N', 'n'].includes(string[i]) && ['J', 'j'].includes(string[i + 1])) ||
      (['D', 'd'].includes(string[i]) && ['J', 'j', 'Ž', 'ž', 'Z', 'z'].includes(string[i + 1]));
    let currentLetter;

    if (specialCases) {
      // construct two letter key and remove the next character, otherwise skip 2 letters
      currentLetter = characterObject[dir][string[i] + string[i + 1]] || string[i] + string[i + 1];
      string = string.slice(0, i) + string.slice(i + 1);
    } else {
      currentLetter = characterObject[dir][string[i]] || string[i];
    }

    string = string.replace(string[i], currentLetter);
  }

  return string;
};
