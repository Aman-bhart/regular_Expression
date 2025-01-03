const divideBy2 = /^(..){0,}$/;
const divideBy3 = /^(...){0,}$/;
const divideBy = (num) => {
  return divideBy3.test(" ".repeat(num));
};
