import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";
import AuthContext from "../../context/auth/authContext";
import LobbyCotext from "../../context/lobby/lobbyContext";
import RoomContext from "../../context/room/roomContext";
import AlertContext from "../../context/alert/alertContext";
import UserList from "./UserList";

import {
  Paper,
  Chip,
  Button,
  TextField,
  AppBar,
  IconButton,
  Typography
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
    height: "70%",
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
  },
  server: {
    textAlign: "center",
    margin: "15px auto 15px auto"
  },
  entrance: {
    fontWeight: "700"
  },
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
    margin: "0 2% 0 2%",
    backgroundColor: "black"
  }
}));

const Room = ({ match, history }) => {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const lobbyContext = useContext(LobbyCotext);
  const roomContext = useContext(RoomContext);
  const alertContext = useContext(AlertContext);

  const [values, setValues] = useState({
    topic: match.params.namespace,
    roomId: match.params.roomId,
    userListFlag: false
  });

  const { roomId, topic, userListFlag } = values;

  const { user } = authContext;
  const { setAlert } = alertContext;

  let {
    chatList,
    userList,
    leaveRoom,
    sendChat,
    localStream,
    windowBackEvent,
    joinRoom,
    currentRoom,
    remoteStreamArr,
    remoteStream
  } = roomContext;

  useEffect(() => {
    async function join() {
      await joinRoom(topic, roomId, user);
    }

    if (user) {
      join();
    }

    windowBackEvent();
  }, [user, roomId]);

  const [textValue, changeTextValue] = useState("");

  const sendChatAction = msgObj => {
    sendChat(msgObj);
  };

  const onUserList = () => {
    if (!userListFlag) {
      setValues({ ...values, userListFlag: true });
      return;
    }
    setValues({ ...values, userListFlag: false });
  };

  const onChange = e => changeTextValue(e.target.value);

  const onKeyHandler = e => {
    if (e.key === "Enter") {
      onSubmit(e);
    }
  };

  const onLeave = e => {
    e.preventDefault();
    leaveRoom();
    history.push("/lobby");
  };

  const onSubmit = e => {
    if (!user) {
      setAlert("로그인`이 필요합니다");
      return;
    }

    if (e.target.value === "") {
      setAlert("내용을 입력해주세요");
      return;
    }

    const msgObj = {
      roomId,
      from: user.name,
      msg: e.target.value
    };

    sendChatAction(msgObj);
    changeTextValue("");
  };

  return (
    <div>
      <Paper className={classes.root}>
        <div>
          <Backspace fontSize="large" onClick={onLeave} />
        </div>
        <div className={classes.flex}>
          <Typography variant="h4">
            {currentRoom !== "" ? currentRoom.roomName : "asdf"}
          </Typography>
        </div>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <div>
              <div className={classes.myPlayerArea}>
                <ReactPlayer
                  playing
                  url={localStream}
                  width="100%"
                  height="100%"
                />
              </div>
              {remoteStream ? (
                <div className={classes.anotherPlayer}>
                  <div>this is remote stream</div>
                  <ReactPlayer
                    playing
                    url={remoteStream}
                    width="21%"
                    height="100%"
                    className={classes.smallPlayer}
                  />
                </div>
              ) : null}
            </div>
            {/* <VideoInRoom localStream={localStream}></VideoInRoom> */}
          </div>
          <div className={classes.chatWindow}>
            <AppBar position="static">
              <div className={classes.chatMenu}>
                <span>LIVE CHAT</span>
                <span>
                  <IconButton color="inherit" onClick={onUserList}>
                    <Person />
                  </IconButton>
                </span>
              </div>
            </AppBar>
            {userListFlag ? (
              <div className={classes.chatBox}>
                <UserList userList={userList}></UserList>
              </div>
            ) : (
              <div className={classes.chatBox}>
                {chatList.map((chat, i) => {
                  return chat.from === "server:entrance" ? (
                    <div className={classes.server} key={i}>
                      <span className={classes.entrance}>{chat.msg}</span>
                      <span>님이 입장하셨습니다</span>
                    </div>
                  ) : (
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
            )}
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
