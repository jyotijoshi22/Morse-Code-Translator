import { textToMorseCode, morseToTextCode } from "./dictionary.js";

export const textToMorse = (english) => {
  return english
    .toUpperCase()
    .split("")
    .map((el) => {
      return textToMorseCode[el] ? textToMorseCode[el] : el;
    })
    .join(" ");
};

export const morseToText = (morse) => {
  return morse
    .split("   ") // get word code, 3 spaces apart
    .map(
      (word) =>
        word
          .split(" ") // get character code, 1 spaces apart
          .map((character) => morseToTextCode[character]) // decode character
          .join("") // join characters to word
    )
    .join(" ") // add spaces between words
    .trim();
};
