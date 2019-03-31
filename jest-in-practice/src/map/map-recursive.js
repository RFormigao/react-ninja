"use strict";

const map = (arr = [], func = item => item) => {
  return (function mapInternal(arrayInternal, counter = 0) {
    const [head, ...tail] = arrayInternal;

    return arrayInternal.length === 0
      ? []
      : [func(head, counter, arr), ...mapInternal(tail, counter + 1)];
  })(arr, 0);
};

export default map;
