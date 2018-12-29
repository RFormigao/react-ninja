"use strict";

import { SET_VISIBILITY_FILTER, SHOW_ALL } from "./actions";
import createReducer from "../create-reducer";

const visibilityFilter = createReducer(SHOW_ALL, {
  [SET_VISIBILITY_FILTER]: (_, action) => action.payload.filter
});

export default visibilityFilter;
