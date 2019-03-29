"use strict";

export default (array, func) => {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    newArray.push(func(element, i, array));
  }

  return newArray;
};
