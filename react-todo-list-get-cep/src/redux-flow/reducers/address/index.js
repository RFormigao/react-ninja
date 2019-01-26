"use strict";

import createReducer from "../create-reducer";
import { FETCHING, SUCCESS } from "./actions";

const initialState = {
  address: "",
  city: "",
  code: "",
  district: "",
  state: "",
  status: undefined,
  isFetching: false
};

const address = createReducer(initialState, {
  [FETCHING]: (state, _) => ({ ...state, isFetching: true }),
  [SUCCESS]: (_, action) => ({ ...action.payload, isFetching: false })
});

export default address;
