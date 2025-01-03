import * as Assertion from "jsr:@std/assert";
import {
  allLowerCase,
  allLowerExceptxy,
  atleatOneUpperCase,
  containsHello,
  endsWithED,
  exactlyTwoSpaces,
  isOnlyNum,
  occuranceE,
  singleSpace,
  startsAndEndWithSameLetter,
  startsWithABC,
  startsWithC,
  stringContain7,
  stringContainForwardSlash,
  stringWithAND,
  stringWithPeriod,
  stringWithSequence123,
  stringWithYes,
  twoConsecutiveVowel,
  wordsOfLength5,
  wordStartsVowel,
} from "./practiceQuestionsPrograms.js";

Deno.test("string that contains a num", () => {
  Assertion.assert(isOnlyNum("hello1"));
  Assertion.assert(isOnlyNum("hello1123123"));
  Assertion.assertFalse(isOnlyNum("hello"));
});

Deno.test("find all lower case in string", () => {
  Assertion.assertEquals(allLowerCase("heoHa"), ["h", "e", "o", "a"]);
  Assertion.assertEquals(allLowerCase("AADSA"), null);
});

Deno.test("string that ends with ed", () => {
  Assertion.assert(endsWithED("sdased"));
  Assertion.assertFalse(endsWithED("sdas"));
});

Deno.test("string has yes", () => {
  Assertion.assert(stringWithYes("asfyes"));
  Assertion.assertFalse(stringWithYes("asfys"));
});

Deno.test("string two consecutive vowels", () => {
  Assertion.assert(twoConsecutiveVowel("gdfae"));
  Assertion.assertFalse(twoConsecutiveVowel("gdfdase"));
});

Deno.test("string contains hello", () => {
  Assertion.assert(containsHello("sdhello"));
  Assertion.assertFalse(containsHello("sdhelo"));
});

Deno.test("string exactly two spaces", () => {
  Assertion.assert(exactlyTwoSpaces("  "));
  Assertion.assert(exactlyTwoSpaces("a  "));
  Assertion.assert(exactlyTwoSpaces("a  dff"));
  Assertion.assert(exactlyTwoSpaces("a d ff"));
  Assertion.assertFalse(exactlyTwoSpaces("a d f f"));
});

Deno.test("string starts with abc", () => {
  Assertion.assert(startsWithABC("abcerer"));
  Assertion.assertFalse(startsWithABC("asbcerer"));
  Assertion.assertFalse(startsWithABC("aadsabcerer"));
});

Deno.test("string with digit 7", () => {
  Assertion.assert(stringContain7("7"));
  Assertion.assert(stringContain7("fads7dsf"));
  Assertion.assert(stringContain7("fads7ds7f"));
  Assertion.assertFalse(stringContain7("fadsf"));
});

Deno.test("occurance of e", () => {
  Assertion.assertEquals(occuranceE("sfe e e"), 3);
  Assertion.assertEquals(occuranceE(""), 0);
});

Deno.test("atleast one upperCase", () => {
  Assertion.assert(atleatOneUpperCase("fsfA"));
  Assertion.assertFalse(atleatOneUpperCase("fsf"));
});

Deno.test("string with period", () => {
  Assertion.assert(stringWithPeriod("fsf."));
  Assertion.assertFalse(stringWithPeriod("fsf"));
});

Deno.test("string with single space", () => {
  Assertion.assert(singleSpace("f sf"));
  Assertion.assert(singleSpace(" sf"));
  Assertion.assertFalse(singleSpace("s s f"));
});

Deno.test("string starts with c", () => {
  Assertion.assertEquals(startsWithC("class"), ["class"]);
  Assertion.assertEquals(startsWithC("class glass cool"), ["class", "cool"]);
});

Deno.test("string has sequence 123", () => {
  Assertion.assert(stringWithSequence123("c123d"));
  Assertion.assertFalse(stringWithSequence123("c11423d"));
});

Deno.test("string has forward slash", () => {
  Assertion.assert(stringContainForwardSlash("c/123d"));
  Assertion.assertFalse(stringContainForwardSlash("c123d"));
});

Deno.test("string contains AND", () => {
  Assertion.assert(stringWithAND("cand"));
  Assertion.assertFalse(stringWithAND("c123d"));
});

Deno.test("string starts and ends with same char", () => {
  Assertion.assert(startsAndEndWithSameLetter("canc"));
  Assertion.assert(startsAndEndWithSameLetter("cac"));
  Assertion.assert(startsAndEndWithSameLetter("n"));
  Assertion.assertFalse(startsAndEndWithSameLetter("c123d"));
});

Deno.test("all lower case except x and y", () => {
  Assertion.assertEquals(allLowerExceptxy("canxyc"), ["c", "a", "n", "c"]);
});

Deno.test("all words of length 5", () => {
  Assertion.assertEquals(wordsOfLength5("hello bharti"), ["hello"]);
});

Deno.test("all words starts with vowel", () => {
  Assertion.assertEquals(wordStartsVowel("my ball all around "), [
    "all",
    "around",
  ]);
});
