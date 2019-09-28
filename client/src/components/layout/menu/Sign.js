import React, { Fragment, useContext } from "react";
import { makeStyles, Button, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/auth/authContext";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: "80%",
    borderRadius: "12px"
  },
  whiteButton: {
    margin: theme.spacing(1),
    width: "80%",
    borderRadius: "12px",
    borderColor: "white",
    color: "white"
  },
  input: {
    display: "none"
  },
  profile: {
    color: "white",
    textAlign: "center",
  },
  wrapper: {
    textAlign: "center"
  },
  top: {
    marginTop: "60vh"
  }
}));

const Sign = () => {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const guestComponent = (
    <div className={classes.top}>
      <div className={classes.wrapper}>
        <Link to="/signup">
          <Button variant="contained" className={classes.button}>
            SIGN UP
          </Button>
        </Link>
      </div>
      <div className={classes.wrapper}>
        <Link to="/login">
          <Button variant="outlined" className={classes.whiteButton}>
            LOGIN
          </Button>
        </Link>
      </div>
    </div>
  );

  const loginUserComponent = user => (
    <div className={classes.top}>
      <div className={classes.profile}>{user.user.name}</div>
      <Divider></Divider>
      <div className={classes.wrapper}>
        <Button
          variant="outlined"
          className={classes.whiteButton}
          onClick={logout}
        >
          LOG OUT
        </Button>
      </div>
    </div>
  );

  if (isAuthenticated && user) {
    return loginUserComponent(user);
  } else {
    return guestComponent;
  }
};

export default Sign;
