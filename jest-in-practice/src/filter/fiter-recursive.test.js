"use strict";

import { expect } from "chai";
import filter from "./filter-recursive";

describe("#filter", () => {
  it("filter should be a function", () => {
    expect(filter).to.be.a("function");
  });

  it("filter([1, 2, 3], item => item > 1) should be return [2, 3] ", () => {
    expect(filter([1, 2, 3], item => item > 1)).to.be.deep.equal([2, 3]);
  });

  it("filter(['a', 'c'], item => item == c) should be return ['c'] ", () => {
    expect(filter(["a", "c"], item => item == "c")).to.be.deep.equal(["c"]);
  });

  it("filter([1, 2, 3, 4], (item, index) => index > 1) should be return [3, 4]", () => {
    expect(filter([1, 2, 3, 4], (_, index) => index > 1)).to.be.deep.equal([
      3,
      4
    ]);
  });

  it("filter(['a', 'b', 'c', 'd'], (item, index) => index < 2) should be return ['a', 'b']", () => {
    expect(
      filter(["a", "b", "c", "d"], (_, index) => index < 2)
    ).to.be.deep.equal(["a", "b"]);
  });

  it("filter([10, 20, 30], (item, index, array) => array.length > 1 should be return [10, 20, 30]", () => {
    expect(
      filter([10, 20, 30], (_item, _index, array) => array.length > 1)
    ).to.be.deep.equal([10, 20, 30]);
  });

  it("filter() should be return []", () => {
    expect(filter()).to.be.deep.equal([]);
  });

  it("filter([1, 2]) should be return [1, 2]", () => {
    expect(filter([1, 2])).to.be.deep.equal([1, 2]);
  });
});
