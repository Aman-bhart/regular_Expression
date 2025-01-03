import { words } from "./repeatedTwoChars.js";

const evenLength = function (words) {
  return words.filter((word) => word.match(/^(..)*$/));
};

console.log(evenLength(words));
