"use strict";

const filter = (arr = [], func = item => item) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (func(element, i, arr)) newArr.push(element);
  }

  return newArr;
};

export default filter;
