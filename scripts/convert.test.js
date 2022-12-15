import { textToMorseCode, morseToTextCode } from "./dictionary.js";
import { textToMorse, morseToText } from "./convert.js";

describe("Testing English to Morse", () => {
  it("Should translate individual characters as expected", () => {
    expect(textToMorse("a", textToMorseCode)).toStrictEqual(".-");
    expect(textToMorse("j", textToMorseCode)).toStrictEqual(".---");
    expect(textToMorse("z", textToMorseCode)).toStrictEqual("--..");
  });

  it("Should translate spaces correctly and ignore trailing spaces", () => {
    expect(textToMorse("a a", textToMorseCode)).toBe(".-   .-");
    expect(textToMorse("a      ", textToMorseCode)).toStrictEqual(".-");
  });

  it("Should handle spaces correctly for english text and morse code", () => {
    expect(textToMorse("morse code", textToMorseCode)).toBe(
      "-- --- .-. ... .   -.-. --- -.. ."
    );

    expect(textToMorse("a b c", textToMorseCode)).toBe(".-   -...   -.-.");
  });

  it("Should support capitals, numbers and symbols", () => {
    expect(textToMorse("ABC123", textToMorseCode)).toBe(
      ".- -... -.-. .---- ..--- ...--"
    );

    expect(textToMorse("-'dash'?", textToMorseCode)).toBe(
      "-....- .----. -.. .- ... .... .----. ..--.."
    );
  });
});

describe("Testing Morse to English", () => {
  it("Should convert morse code to english text", () => {
    expect(morseToText(".-", morseToTextCode)).toBe("a");
    expect(morseToText("- . -..- -", morseToTextCode)).toBe("text");
  });

  it("Should handle spaces correctly for english text and morse code", () => {
    expect(morseToText(".. -   .-- --- .-. -.- ...", morseToTextCode)).toBe(
      "it works"
    );
  });
});
