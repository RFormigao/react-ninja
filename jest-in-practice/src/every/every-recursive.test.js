"use strict";

import { expect } from "chai";
import every from "./every-recursive";

describe("#every", () => {
  it("every should be a function", () => {
    expect(every).to.be.a("function");
  });

  it("every([1, 2, 3], item => item > 0) should be return true", () => {
    expect(every([1, 2, 3], item => item > 0)).to.be.deep.equal(true);
  });

  it("every([1, 2, 3], item => item > 3) should be return false", () => {
    expect(every([1, 2, 3], item => item > 3)).to.be.deep.equal(false);
  });

  it("every([1, 2, 3], (_, index) => index < 3) should be return true", () => {
    expect(every([1, 2, 3], (_, index) => index < 3)).to.be.deep.equal(true);
  });

  it("every([1, 2, 3], (_, index) => index > 0) should be return false", () => {
    expect(every([1, 2, 3], (_, index) => index > 0)).to.be.deep.equal(false);
  });

  it("every([1, 2, 3], (_, _index, array) => array.length === 3) should be return true", () => {
    const before = every([1, 2, 3], (_, _index, array) => array.length === 3);
    expect(before).to.be.deep.equal(true);
  });

  it("every([1, 2, 3], (_, _index, array) => array.length === 1) should be return false", () => {
    const before = every([1, 2, 3], (_, _index, array) => array.length === 1);
    expect(before).to.be.deep.equal(false);
  });

  it("every() should be return false", () => {
    expect(every()).to.be.deep.equal(false);
  });

  it("every([1, 2, 3]) should be return true", () => {
    expect(every([1, 2, 3])).to.be.deep.equal(true);
  });
});
