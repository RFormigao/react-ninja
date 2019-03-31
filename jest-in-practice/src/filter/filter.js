"use strict";

const filter = (arr = [], func = item => item) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const result = func(element, i, arr);
    if (result) newArr.push(result);
  }

  return newArr;
};

export default filter;
