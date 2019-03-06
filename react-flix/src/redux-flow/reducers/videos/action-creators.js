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
    const videos = snapshopt.val();
    Object.keys(videos)
      .sort((a, b) => (videos[a].title < videos[b].title ? -1 : 1))
      .forEach(id =>
        dispatch(
          addVideo({
            id,
            title: videos[id].title
          })
        )
      );
  });
};
