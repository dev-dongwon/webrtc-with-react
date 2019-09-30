import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Player } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";
import {
  Divider,
  Paper,
  Chip,
  Typography,
  Button,
  TextField
} from "@material-ui/core";
import uuid from "uuid";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "1rem",
    padding: theme.spacing(3, 2),
    height: "96vh"
  },
  flex: {
    display: "flex"
  },
  topicsWindow: {
    width: "80%",
    height: "auto"
  },
  chatWindow: {
    width: "350px",
    height: "95vh"
  },
  chatBox: {
    height: "85%",
    backgroundColor: "white"
  },
  messageBox: {
    height: "10%",
    backgroundColor: "white"
  },
  button: {
    marginTop: "10px",
    textAlign: "right"
  },
  chip: {
    marginLeft: "1rem",
    marginRight: "1rem"
  },
  message: {
    alignItems: "center"
  },
  messageWrapper: {
    padding: "5px"
  },
  textBox: {
    width: "330px"
  }
}));

const Room = ({ match }) => {
  const classes = useStyles();
  const [textValue, changeTextValue] = useState("");

  return (
    <div>
      <Paper className={classes.root}>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <Player
              autoPlay={false}
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
            <div className={classes.flex}>
              <div>{match.params.roomId}</div>
            </div>
          </div>
          <div className={classes.chatWindow}>
            <div className={classes.chatBox}>
              {[
                { from: "user", msg: "hello" },
                { from: "user", msg: "hello" }
              ].map((chat, i) => {
                return (
                  <div
                    className={classes.flex}
                    key={i}
                    className={classes.messageWrapper}
                  >
                    <Chip label={chat.from} className={classes.chip} />
                    {chat.msg}
                  </div>
                );
              })}
            </div>
            <div className={classes.messageBox} className={classes.button}>
              <div>
                <TextField
                  id="standard-name"
                  className={classes.textBox}
                  placeholder="Send a chat"
                  value={textValue}
                  onChange={e => changeTextValue(e.target.value)}
                />
              </div>
              <div className={classes.button}>
                <Button variant="contained" color="primary">
                  send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Room;
