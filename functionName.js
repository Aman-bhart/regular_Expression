const program = `// Remove last n elements from the array
// dropLast([1, 2, 3], 1) => [1, 2]
// dropLast([1, 2, 3], 4) => []
// Do not modify the original array
function dropLast(array, noOfTerms) {
  const droppedArray = [];

  for (let index = 0; index < array.length - noOfTerms; index++) {
    droppedArray.push(array[index]);
  }

  return droppedArray;
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function getMessage(array, noOfElement, expected) {
  let messsage = "dropped array in [" + array + "] from " + noOfElement;
  messsage = messsage + " elements should be [" + expected;

  return messsage + "] and is [" + dropLast(array, noOfElement) + "]";
}

function getMark(isExpected) {
  return isExpected ? "✅" : "❌";
}

function testLastDrop(array, noOfElement, expected) {
  const actual = dropLast(array, noOfElement);
  const isExpected = areEqual(actual, expected)
  const mark = getMark(isExpected);

  return console.log(mark, getMessage(array, noOfElement, expected));
}

function testAll() {
  testLastDrop([1], 0, [1]);
  testLastDrop([1], 1, []);
  testLastDrop([1, 2], 1, [1]);
  testLastDrop([1, 2], 3, []);
  testLastDrop([1, 2, 3, 4, 5, 6], 4, [1, 2]);
}

testAll();
`;

const arrayOfProgram = program.split("\n");

const regExpre = /^function \w+/;

const functionsName = arrayOfProgram
  .filter((line) => line.match(regExpre))
  .map((line) => line.match(regExpre)[0].split(" ")[1]);

console.log(functionsName);
