import { textToMorseCode, morseToTextCode } from "./dictionary.js";
import { textToMorse, morseToText } from "./convert.js";

const inputText = document.getElementById("inputTextOrMorse");
const outputText = document.getElementById("outputText");

const clearText = document.getElementById("clear");
const textInputButton = document.getElementById("transText");
const morseInputButton = document.getElementById("transMorse");

//when text to morse button is clicked

textInputButton.addEventListener("click", () => {
  outputText.value = textToMorse(inputText.value);
  console.log(outputText.value);
});

//morse to text button clicked
morseInputButton.addEventListener("click", () => {
  outputText.value = morseToText(inputText.value);
  console.log(outputText.value);
});

clearText.addEventListener("click", () => {
  inputText.value = "";
  outputText.value = "";
});
