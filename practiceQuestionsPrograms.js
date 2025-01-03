//1. Match any string that contains a number.
export const isOnlyNum = (string) => /\d/.test(string);

//2. Find all lowercase letters in a string.
export const allLowerCase = (string) => {
  const lowerReg = /[a-z]/g;
  return string.match(lowerReg);
};

//3. Match a string that ends with "ed".
export const endsWithED = (string) => {
  const endsED = /ed$/;
  return endsED.test(string);
};

//4. Match the word "yes" in a string.
export const stringWithYes = (string) => {
  const yesRegEx = /yes/;
  return yesRegEx.test(string);
};

//5. Find any two consecutive vowels in a string.
export const twoConsecutiveVowel = (string) => {
  const twoVowel = /[aeiou]{2}/;
  return twoVowel.test(string);
};

//6. Match any string containing the word "hello".
export const containsHello = (string) => {
  const helloReg = /hello/;
  return helloReg.test(string);
};

//7. Find a string that contains exactly two spaces.
export const exactlyTwoSpaces = (string) => {
  const twoSpace = /^\S*\s\S*\s\S*$/;
  return twoSpace.test(string);
};

//8. Find a string that starts with "abc".
export const startsWithABC = (string) => {
  const abcReg = /^abc/;
  return abcReg.test(string);
};

//9. Match any string that contains the digit `7`.
export const stringContain7 = (string) => {
  const digit7 = /7/;
  return digit7.test(string);
};

//10. Find all occurrences of the letter `e`.
export const occuranceE = (string) => {
  const occurOfE = string.match(/e/g) || [];
  return occurOfE.length;
};

//11. Match a string that has at least one uppercase letter.
export const atleatOneUpperCase = (string) => {
  const atleastOneUpper = /[A-Z]/;
  return atleastOneUpper.test(string);
};

//12. Find a string with a period (`.`) in it.
export const stringWithPeriod = (string) => {
  return /\./.test(string);
};

//13. Match a string that contains a single space.
export const singleSpace = (string) => {
  const aSpace = /^\S*\s\S*$/;
  return aSpace.test(string);
};

//14. Match all words that start with the letter `c`.
export const startsWithC = (string) => {
  const startC = /c\w*/g;
  return string.match(startC);
};

//15. Match a string that contains the sequence "123".
export const stringWithSequence123 = (string) => {
  const seq123 = /123/;
  return seq123.test(string);
};

//16. Match a string that contains a forward slash (`/`).
export const stringContainForwardSlash = (string) => {
  const forwardSlash = /\//;
  return forwardSlash.test(string);
};

//17. Find all strings that contain "and".
export const stringWithAND = (string) => {
  const ANDregex = /and/;
  return ANDregex.test(string);
};

//18. Match a string that starts and ends with the same letter.
export const startsAndEndWithSameLetter = (string) => {
  const startAndEndSame = /^(.).*\1$|^.$/;
  return startAndEndSame.test(string);
};

//19. Match all lowercase letters except "x" and "y".
export const allLowerExceptxy = (string) => {
  const lowerCaseExceptxy = /[^xy]/g;
  return string.match(lowerCaseExceptxy);
};

//20. Find all words in a string that are exactly 5 letters long.
export const wordsOfLength5 = (string) => {
  const wordLength5 = /\b\w{5}\b/g;
  return string.match(wordLength5);
};

//21. Match all words starting with a vowel.
export const wordStartsVowel = (string) => {
  const wordStartsVowel = /\b[aeiou]\w*/gi;
  return string.match(wordStartsVowel);
};

// 22. Find all sequences of two or more consecutive digits.
export const consecutiveDigits = (string) => {
  
};

// 23. Match all words that contain exactly three letters.
// 24. Find all occurrences of the word "cat" or "dog".
// 25. Capture the first and last name from a string like `"John Doe"`.
// 26. Match strings with repeating characters (e.g., `"aa"`, `"bb"`).
// 27. Extract all the hashtags from a tweet.
// 28. Validate a 24-hour time format like `"23:59"`.
// 29. Capture the area code and phone number from `(123) 456-7890`.
// 30. Find sequences of whitespace followed by a word.
// 31. Match strings containing at least one uppercase and one digit.
// 32. Find all non-alphanumeric characters in a string.
// 33. Match email addresses.
// 34. Validate dates in the format `YYYY-MM-DD`.
// 35. Extract the filename and extension from a path like `/path/to/file.txt`.
// 36. Find all duplicate words in a sentence.
// 37. Match words that do not contain the letter "e".
// 38. Extract the domain name from a URL like `https://www.example.com`.
// 39. Match strings containing three consecutive vowels.
// 40. Find all 4-letter palindromes in a string.
