import * as Assertion from "jsr:@std/assert";
import { isOnlyNum } from "./practiceQuestionsPrograms.js";

Deno.test("string that contains a num", () => {
  Assertion.assert(isOnlyNum("hello1"));
  Assertion.assert(isOnlyNum("hello1123123"));
  Assertion.assertFalse(isOnlyNum("hello"));
});
