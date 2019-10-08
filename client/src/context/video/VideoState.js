import React, { useReducer } from "react";

import VideoContext from "./videoContext";
import VideoReducer from "./videoReducer";

import { GET_MY_SRC } from "../types";

const VideoState = props => {
  const initialState = {
    myVideoSrcObj: "",
    peerVideoSrcArr: []
  };

  const [state, dispatch] = useReducer(VideoReducer, initialState);
  let { myVideoSrcObj, peerVideoSrcArr } = state;

  const getMyMediaStream = async () => {
    let mediaStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: 1280, height: 720 }
    });
    dispatch({ type: GET_MY_SRC, payload: mediaStream });
  };

  return (
    <VideoContext.Provider
      value={{ myVideoSrcObj, getMyMediaStream, peerVideoSrcArr }}
    >
      {props.children}
    </VideoContext.Provider>
  );
};

export default VideoState;
