import React from "react";
import Sign from "./Sign";
import Items from "./Items";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  nav : {
    position: "fixed",
    zIndex: "1",
    background: "#74BDCB",
    height: "100vh",
    width: "100%"
  }
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <Grid item xs={false} sm={4} md={2} className={classes.nav}>
      <Items></Items>
      <Sign></Sign>
    </Grid>
  );
};

export default Nav;