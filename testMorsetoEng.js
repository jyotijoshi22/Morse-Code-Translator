const decodeMorse = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
};

const morseCode = (morse) => {
  return morse
    .split("   ") // get word code, 3 spaces apart
    .map(
      (word) =>
        word
          .split(" ") // get character code, 1 spaces apart
          .map((character) => decodeMorse[character]) // decode character
          .join("") // join characters to word
    )
    .join(" ") // add spaces between words
    .trim();
};
console.log(morseCode(".... . -.--   .--- ..- -.. ."));
