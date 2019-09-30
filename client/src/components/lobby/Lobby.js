import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Divider, Modal, TextField, MenuItem } from "@material-ui/core";
import uuid from "uuid";

const lang = [
  {
    value: "java",
    label: "java"
  },
  {
    value: "javascript",
    label: "javascript"
  },
  {
    value: "c",
    label: "c"
  },
  {
    value: "cplus",
    label: "c++"
  }
];

const secret = [
  {
    value: "private",
    label: "private"
  },
  {
    value: "public",
    label: "public"
  }
];

const problemTypes = [
  {
    value: "settings",
    label: "환경설정"
  }
];

const problems = [
  {
    value: "architecture",
    label: "코드 구조 및 아키텍처"
  },
  {
    value: "code",
    label: "구현 문제"
  },
  {
    value: "algorithm",
    label: "알고리즘"
  }
];

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
    height: "40%",
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

const Lobby = () => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    lang: null,
    secret: null,
    open: false,
    roomId: null
  });

  const { open } = values;

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleOpen = () => {
    setValues({ ...values, open: true });
  };

  const handleClose = () => {
    setValues({ ...values, open: false });
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
              label="room"
              className={classes.textField}
              placeholder="방제를 입력해주세요"
              variant="outlined"
              fullWidth
              autoFocus
            />
            <TextField
              id="lang"
              select
              label="language"
              className={classes.textField}
              value={values.lang}
              onChange={handleChange("lang")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText="언어를 선택해주세요"
              margin="normal"
              variant="outlined"
            >
              {lang.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="secret"
              select
              label="secret"
              className={classes.textField}
              value={values.secret}
              onChange={handleChange("secret")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText="공개 여부를 선택해주세요"
              margin="normal"
              variant="outlined"
            >
              {secret.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </form>
          <div className={classes.buttonArea}>
            <span>
              <Link to={`/rooms/${uuid.v4()}`}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  create
                </Button>
              </Link>
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
