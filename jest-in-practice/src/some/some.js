"use strict";

const some = (arr = [], func = item => item) => {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) return true;
  }
  return false;
};

export default some;
