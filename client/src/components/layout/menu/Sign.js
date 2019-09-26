import React, { Fragment, useContext } from "react";
import { makeStyles, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

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
  wrapper: {
    textAlign: "center"
  }
}));

const Sign = () => {
  const classes = useStyles();

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Sign;
