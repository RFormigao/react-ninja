"use strict";

import { SET_VISIBILITY_FILTER, SHOW_ALL } from "./actions";
import createReducer from "../create-reducer";

export const initialState = SHOW_ALL;

const visibilityFilter = createReducer(initialState, {
  [SET_VISIBILITY_FILTER]: (_, action) => action.payload.filter
});

export default visibilityFilter;
