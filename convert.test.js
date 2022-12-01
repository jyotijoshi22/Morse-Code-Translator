import { textToMorseCode, morseToTextCode } from "./dictionary.js";
import { textToMorse, morseToText } from "./convert.js";

describe("Testing English to Morse", () => {
  it("Should translate individual characters as expected", () => {
    expect(engToMorse("a", textToMorseCode)).toStrictEqual(".-");
    expect(engToMorse("t", textToMorseCode)).toStrictEqual(".-");
    expect(engToMorse("k", textToMorseCode)).toStrictEqual(".-");
    expect(engToMorse("z", textToMorseCode)).toStrictEqual("--..");
  });

  it("Should translate spaces correctly and ignore trailing spaces", () => {
    expect(engToMorse("a a", textToMorseCode)).toStrictEqual(".- / .-");
    expect(engToMorse("a      ", textToMorseCode)).toStrictEqual(".-");
  });
});
