"use strict";

let i = 0;
let saveArr = [];
const some = (arr = [], func = item => item) => {
  const [head, ...tail] = arr;

  if (i == 0) {
    saveArr = arr;
  }

  if (func(head, i, saveArr)) {
    i = 0;
    return true;
  }
  i++;
  if (tail.length === 0) {
    i = 0;
    return false;
  }

  return some(tail, func);
};

export default some;
