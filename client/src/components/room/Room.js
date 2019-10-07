import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Player } from "video-react";

import AuthContext from "../../context/auth/authContext";
import LobbyCotext from "../../context/lobby/lobbyContext";
import RoomContext from "../../context/room/roomContext";
import AlertContext from "../../context/alert/alertContext";

import "../../../node_modules/video-react/dist/video-react.css";
import {
  Paper,
  Chip,
  Button,
  TextField,
  AppBar,
  IconButton
} from "@material-ui/core";

import { Person, Backspace } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  chatMenu: {
    textAlign: "right"
  },
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
    height: "82%",
    backgroundColor: "white",
    overflow: "auto"
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
  const authContext = useContext(AuthContext);
  const lobbyContext = useContext(LobbyCotext);
  const roomContext = useContext(RoomContext);
  const alertContext = useContext(AlertContext);

  const [values, setValues] = useState({
    topic: match.params.namespace,
    roomId: match.params.roomId
  });

  const { topic, roomId } = values;

  const { user } = authContext;
  const { setAlert } = alertContext;
  const { room } = lobbyContext;
  let {
    chatList,
    userList,
    joinRoom,
    leaveRoom,
    sendChat,
    connectRoom,
  } = roomContext;

  const { hostId, password, privateFlag, roomName } = room;

  useEffect(() => {
    connectRoom(match.params.namespace, user, roomId);
  }, [connectRoom]);

  const [textValue, changeTextValue] = useState("");

  const sendChatAction = msgObj => {
    sendChat(msgObj);
  };

  const onChange = e => changeTextValue(e.target.value);

  const onKeyHandler = e => {
    if (e.key === "Enter") {
      onSubmit(e);
    }
  };

  const onSubmit = e => {
    if (!user) {
      setAlert("로그인이 필요합니다");
      return;
    }

    if (e.target.value === "") {
      setAlert("내용을 입력해주세요");
      return;
    }

    const msgObj = {
      roomId,
      from: user.name,
      msg: e.target.value,
    };

    sendChatAction(msgObj);
    changeTextValue("");
  };

  return (
    <div>
      <Paper className={classes.root}>
        <div>
          <Backspace fontSize="large" />
        </div>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <Player
              autoPlay={false}
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
            <div className={classes.flex}>
              <div>{roomName}</div>
              <div>{match.params.roomId}</div>
            </div>
          </div>
          <div className={classes.chatWindow}>
            <AppBar position="static">
              <div className={classes.chatMenu}>
                <span>LIVE CHAT</span>
                <span>
                  <IconButton color="inherit">
                    <Person />
                  </IconButton>
                </span>
              </div>
            </AppBar>
            <div className={classes.chatBox}>
              {chatList.map((chat, i) => {
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
                  onChange={onChange}
                  onKeyDown={onKeyHandler}
                />
              </div>
              <div className={classes.button}>
                <Button variant="contained" color="primary" onClick={onSubmit}>
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
