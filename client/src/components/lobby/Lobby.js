import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Divider, Modal, TextField, MenuItem } from "@material-ui/core";

import LobbyContext from "../../context/lobby/lobbyContext";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

import { privateTypes, topicTypes } from "./selectTypes";
import uuid from "uuid";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: "2rem"
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  topHeader: {
    marginTop: "1rem",
    marginBottom: "1rem",
    marginRight: "1rem",
    textAlign: "center"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    background: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "60%",
    height: "auto",
    marginLeft: "15%",
    borderRadius: "15px"
  },
  textField: {
    margin: theme.spacing(2)
  },
  buttonArea: {
    textAlign: "center",
    marginTop: "1rem",
    marginBottom: "1rem"
  }
}));

const Lobby = props => {
  const classes = useStyles();

  const lobbyContext = useContext(LobbyContext);
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { user } = authContext;
  let { makeRoom, room } = lobbyContext;
  const { setAlert } = alertContext;

  const [values, setValues] = useState({
    privateFlag: false,
    password: "",
    open: false,
    roomName: "",
    topic: "",
    roomId: uuid.v4()
  });

  let { open, privateFlag, password, roomName, topic, roomId } = values;

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleOpen = () => {
    if (!user) {
      setAlert("로그인이 필요한 서비스입니다");
      return;
    }
    setValues({ ...values, open: true });
  };

  const handleClose = () => {
    setValues({ ...values, open: false });
  };

  const onSubmit = e => {
    e.preventDefault();

    if (roomName.length < 1) {
      setAlert("방제를 입력해주세요");
      return;
    }

    if (privateFlag && password.length < 1) {
      setAlert("비밀번호를 입력해주세요");
      return;
    }

    makeRoom({
      roomId,
      hostId: user.user.name,
      roomName,
      privateFlag,
      password,
      topic
    });

    props.history.push(`/rooms/${topicTypes[0].label}/${roomId}`);
  };

  return (
    <div>
      <div className={classes.topHeader}>
        <Button variant="contained" className={classes.button}>
          Default
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleOpen}
        >
          방 만들기
        </Button>
      </div>
      <Divider />
      <Modal open={open} className={classes.modal} onClose={handleClose}>
        <div className={classes.paper}>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="room"
              label="방제"
              name="roomName"
              className={classes.textField}
              placeholder="방제를 입력해주세요"
              variant="outlined"
              value={roomName}
              onChange={handleChange}
              fullWidth
              autoFocus
            />
            <TextField
              id="privateFlag"
              fullWidth
              select
              label="공개여부"
              name="privateFlag"
              className={classes.textField}
              value={privateFlag}
              onChange={handleChange}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              placeholder="공개 여부를 선택해주세요"
              margin="normal"
              variant="outlined"
            >
              {privateTypes.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="topic"
              fullWidth
              select
              label="토픽"
              name="topic"
              className={classes.textField}
              value={topic}
              onChange={handleChange}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              placeholder="대화 주제를 선택해주세요"
              margin="normal"
              variant="outlined"
            >
              {topicTypes.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {privateFlag === true ? (
              <TextField
                id="password"
                label="비밀번호"
                type="password"
                name="password"
                fullWidth
                value={password}
                onChange={handleChange}
                className={classes.textField}
                placeholder="비밀번호를 입력해주세요"
                variant="outlined"
              />
            ) : null}
          </form>
          <div className={classes.buttonArea}>
            <span>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                onClick={onSubmit}
              >
                create
              </Button>
            </span>
            <span>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.button}
                onClick={handleClose}
              >
                cancel
              </Button>
            </span>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Lobby;
