"use strict";

import { expect } from "chai";
import map from "./map";

describe("#map", () => {
  it("map should be a function", () => {
    expect(map).to.be.a("function");
  });

  it("map([1,2], (item) => { return item }) should be [1, 2]", () => {
    expect(
      map([1, 2], item => {
        return item;
      })
    ).to.deep.equal([1, 2]);
  });

  it("map(['a', 'b'], (item) => { return item }) should be ['a', 'b']", () => {
    expect(
      map(["a", "b"], item => {
        return item;
      })
    ).to.deep.equal(["a", "b"]);
  });

  it("map([5, 3], (item, index) => { return item + index}) should be [5, 4]", () => {
    expect(
      map([5, 3], (item, index) => {
        return item + index;
      })
    ).to.deep.equal([5, 4]);
  });

  it("map(['a', 'b', 'c'], (item, index) => { return index}) should be [0, 1, 2]", () => {
    expect(
      map(["a", "b", "c"], (_item, index) => {
        return index;
      })
    ).to.deep.equal([0, 1, 2]);
  });

  it("map([1, 2], (item, index, array) => { return array }) should be [[1, 2], [1, 2]]", () => {
    expect(
      map([1, 2], (_item, _index, array) => {
        return array;
      })
    ).to.deep.equal([[1, 2], [1, 2]]);
  });
});
