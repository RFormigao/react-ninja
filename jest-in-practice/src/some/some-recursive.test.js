"use strict";

import { expect } from "chai";
import some from "./some-recursive";

describe("#some-recursive", () => {
  it("some should be a function", () => {
    expect(some).to.be.a("function");
  });

  it("some([10, 15, 20], item => item > 10) should be true", () => {
    expect(some([10, 15, 20], item => item > 10)).to.be.true;
  });

  it("some([10, 15, 20], item => item < 10) should be false", () => {
    expect(some([10, 15, 20], item => item < 10)).to.be.false;
  });

  it("some([1, 2, 3], (_, index) => index >= 2) should be true", () => {
    expect(some([1, 2, 3], (_, index) => index >= 2)).to.be.true;
  });

  it("some([1, 2, 3], (_, index) => index > 2) should be false", () => {
    expect(some([1, 2, 3], (_, index) => index > 2)).to.be.false;
  });

  it("some([1, 2, 3], (_, _i, array) => array.length === 3) should be true", () => {
    expect(some([1, 2, 3], (_, _i, array) => array.length === 3)).to.be.true;
  });

  it("some([1, 2, 3], (_, _i, array) => array.length < 3) should be false", () => {
    expect(some([1, 2, 3], (_, _i, array) => array.length < 3)).to.be.false;
  });

  it("some() should return false", () => {
    expect(some()).to.be.false;
  });

  it("some([1, 2]) should return true", () => {
    expect(some([1, 2])).to.be.true;
  });
});
