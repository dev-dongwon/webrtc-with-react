import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Player, ControlBar } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";
import {
  Button,
  Divider,
  Modal,
  TextField,
  MenuItem,
  Paper
} from "@material-ui/core";
import uuid from "uuid";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "1rem",
    padding: theme.spacing(3, 2),
    height: "auto"
  },
  flex: {
    display: "flex"
  },
  topicsWindow: {
    width: "80%",
    height: "auto",
  },
  chatWindow: {
    width: "20%",
    height: "auto"
  },
  chatBox: {
    width: "85%"
  },
  button: {
    width: "15%"
  },
  video: {
    width: "50%",
    height: "auto"
  }
}));

const Room = ({ match }) => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <div>{match.params.roomId}</div>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <Player
              autoPlay={false}
              className={classes.video}
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
          </div>
          <div className={classes.chatWindow}></div>
        </div>
        <div className={classes.flex}>
          <div className={classes.chatBox}></div>
        </div>
      </Paper>
    </div>
  );
};

export default Room;
