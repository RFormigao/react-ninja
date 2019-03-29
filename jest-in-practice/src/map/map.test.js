"use strict";

import { expect } from "chai";
import map from "./map";

describe("#map", () => {
  it("map should be a function", () => {
    expect(map).to.be.a("function");
  });

  it("map([1,2], (item) => item ) should be [1, 2]", () => {
    expect(map([1, 2], item => item)).to.deep.equal([1, 2]);
  });

  it("map(['a', 'b'], (item) => item ) should be ['a', 'b']", () => {
    expect(map(["a", "b"], item => item)).to.deep.equal(["a", "b"]);
  });

  it("map([5, 3], (item, index) => item + index ) should be [5, 4]", () => {
    expect(map([5, 3], (item, index) => item + index)).to.deep.equal([5, 4]);
  });

  it("map(['a', 'b', 'c'], (item, index) => index ) should be [0, 1, 2]", () => {
    expect(map(["a", "b", "c"], (_i, index) => index)).to.deep.equal([0, 1, 2]);
  });

  it("map([1, 2], (item, index, array) => array }) should be [[1, 2], [1, 2]]", () => {
    expect(map([1, 2], (_i, _idx, arr) => arr)).to.deep.equal([[1, 2], [1, 2]]);
  });

  it("map() should return []", () => {
    expect(map()).to.be.deep.equal([]);
  });

  it("map([1, 2]) should return [1, 2]", () => {
    expect(map([1, 2])).to.be.deep.equal([1, 2]);
  });
});
