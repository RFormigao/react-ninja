"use strict";

import createReducer from "../create-reducer";
import { SELECT_VIDEO_SINGLE } from "./actions";

const initialState = "";

const videoSingle = createReducer(initialState, {
  [SELECT_VIDEO_SINGLE]: (_, action) => action.payload.id
});

export default videoSingle;
