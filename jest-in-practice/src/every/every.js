"use strict";

const every = (arr = [], func = item => item) => {
  if (!arr.length) return false;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (!func(element, i, arr)) return false;
  }

  return true;
};

export default every;
