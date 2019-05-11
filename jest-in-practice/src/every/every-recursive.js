"use strict";

const every = (arr = [], func = item => item) => {
  return (function everyInternal(arr, counter) {
    const [head, ...tail] = arr;
    if (arr.length == 0 || !func(head, counter, arr)) return false;
    return everyInternal(tail, counter + 1) || true;
  })(arr, 0);
};

export default every;
