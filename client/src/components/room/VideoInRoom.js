import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";

import VideoContext from "../../context/video/videoContext";

const useStyles = makeStyles(theme => ({
  myPlayerArea: {
    width: "100%",
    height: "60vh",
    marginBottom: "2vh"
  },

  anotherPlayer: {
    width: "100%",
    height: "20vh"
  },

  smallPlayer: {
    float: "left",
    margin: "0 2% 0 2%"
  }
}));

const VideoInRoom = () => {
  const classes = useStyles();
  const videoContext = useContext(VideoContext);
  let { getMyMediaStream, myVideoSrcObj } = videoContext;

  useEffect(() => {
    async function getAsyncStream() {
      await getMyMediaStream();
    }
    getAsyncStream();
  }, []);

  return (
    <div>
      <div className={classes.myPlayerArea}>
        <ReactPlayer playing url={myVideoSrcObj} width="100%" height="100%" />
      </div>
      <div className={classes.anotherPlayer}>
        <ReactPlayer
          playing
          url={myVideoSrcObj}
          width="21%"
          height="100%"
          className={classes.smallPlayer}
        />
        <ReactPlayer
          playing
          url={myVideoSrcObj}
          width="21%"
          height="100%"
          className={classes.smallPlayer}
        />
        <ReactPlayer
          playing
          url={myVideoSrcObj}
          width="21%"
          height="100%"
          className={classes.smallPlayer}
        />
        <ReactPlayer
          playing
          url={myVideoSrcObj}
          width="21%"
          height="100%"
          className={classes.smallPlayer}
        />
      </div>
    </div>
  );
};

export default VideoInRoom;
