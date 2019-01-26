"use strict";

import { expect } from "chai";
import deepFreeze from "deep-freeze";

import address from "./index";
import { SUCCESS } from "./actions";

it("should action SUCCESS update address", () => {
  const before = deepFreeze({
    address: "",
    city: "",
    code: "",
    district: "",
    state: "",
    status: undefined,
    isFetching: true
  });

  const action = deepFreeze({
    type: SUCCESS,
    payload: {
      address: "Rua Domingos Moyana",
      city: "Jaú",
      code: "17204-670",
      district: "Jardim Santa Helena",
      state: "SP",
      status: 1
    }
  });

  const after = {
    address: "Rua Domingos Moyana",
    city: "Jaú",
    code: "17204-670",
    district: "Jardim Santa Helena",
    state: "SP",
    status: 1,
    isFetching: false
  };

  expect(address(before, action)).to.be.deep.equal(after);
});
