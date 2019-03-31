"use strict";

import { expect } from "chai";
import filter from "./filter-recursive";

describe("#filter", () => {
  it("filter should be a function", () => {
    expect(filter).to.be.a("function");
  });

  it("filter([1, 2, 3], item => { if (item > 1) return item }) should be return [2, 3] ", () => {
    expect(
      filter([1, 2, 3], item => {
        if (item > 1) return item;
      })
    ).to.be.deep.equal([2, 3]);
  });

  it("filter(['a', 'c'], item => { if (item == c) return item }) should be return ['c'] ", () => {
    expect(
      filter(["a", "c"], item => {
        if (item == "c") return item;
      })
    ).to.be.deep.equal(["c"]);
  });

  it("filter([1, 2, 3, 4], (item, index) => { if (index > 1) return item + index }) should be return [5, 7]", () => {
    expect(
      filter([1, 2, 3, 4], (item, index) => {
        if (index > 1) return item + index;
      })
    ).to.be.deep.equal([5, 7]);
  });

  it("filter(['a', 'b', 'c', 'd'], (item, index) => { if (index < 2) return item }) should be return ['a', 'b']", () => {
    expect(
      filter(["a", "b", "c", "d"], (item, index) => {
        if (index < 2) return item;
      })
    ).to.be.deep.equal(["a", "b"]);
  });

  it("filter([10, 20, 30], (item, index, array) =>  { if (item > 10) return array.length * item }) should be return [60, 90]", () => {
    expect(
      filter([10, 20, 30], (item, _index, array) => {
        if (item > 10) return array.length * item;
      })
    ).to.be.deep.equal([60, 90]);
  });

  it("filter() should be return []", () => {
    expect(filter()).to.be.deep.equal([]);
  });

  it("filter([1, 2]) should be return [1, 2]", () => {
    expect(filter([1, 2])).to.be.deep.equal([1, 2]);
  });
});
