export const words = [
  "java",
  "script",
  "word",
  "hello",
  "doon",
  "school",
  "cake",
  "look",
  "hook",
  "node",
  "proof",
  "danish",
];

const repeatedCharTwice = function (words) {
  const repeatDual = /(\w)\1/;

  return words.filter((word) => repeatDual.test(word));
};

// console.log(repeatedCharTwice(words));
