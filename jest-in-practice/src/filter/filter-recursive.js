"use strict";

const filter = (arr = [], func = item => item) => {
  return (function internalFilter(arrayInternal, counter) {
    const [head, ...tail] = arrayInternal;

    return arrayInternal.length == 0
      ? []
      : (func(head, counter, arr) ? [head] : []).concat(
          internalFilter(tail, counter + 1)
        );
  })(arr, 0);
};

export default filter;
