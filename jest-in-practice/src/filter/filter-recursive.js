"use strict";

const filter = (arr = [], func = item => item) => {
  return (function internalFilter(arrayInternal, counter) {
    const [head, ...tail] = arrayInternal;
    const result = func(head, counter, arr);

    return arrayInternal.length == 0
      ? []
      : result
      ? [result, ...internalFilter(tail, counter + 1)]
      : internalFilter(tail, counter + 1);
  })(arr, 0);
};

export default filter;
