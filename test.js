// english to morse;

const textToMorseCode = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  " ": "/",
};

const textToMorse = (english) => {
  return english
    .toUpperCase()
    .split("")
    .map((el) => {
      return textToMorseCode[el] ? textToMorseCode[el] : el;
    })
    .join(" ");
};

console.log(textToMorse("aaa?"));
