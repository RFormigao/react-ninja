"use strict";

import { ADD_VIDEO } from "./actions";
import { db } from "config/firebase";

export const registerVideo = ({ id, title }) => async dispatch => {
  await db
    .ref("videos")
    .child(id)
    .update({
      id,
      title
    });

  dispatch(addVideo({ id, title }));
};

export const addVideo = ({ id, title }) => ({
  type: ADD_VIDEO,
  payload: { id, title }
});

export const fetchVideos = () => dispatch => {
  db.ref("videos").on("value", snapshopt => {
    snapshopt.forEach(child => {
      dispatch(addVideo(child.val()));
    });
  });
};
