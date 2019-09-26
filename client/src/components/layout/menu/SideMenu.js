import React from "react";
import Sign from "./Sign";
import Items from "./Items";
import { Grid } from "@material-ui/core";

const Nav = () => {
  return (
    <Grid item xs={false} sm={4} md={2} className="nav">
      <Items></Items>
      <Sign></Sign>
    </Grid>
  );
};

export default Nav;