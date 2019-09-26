import React from "react";
import { Grid, Paper } from "@material-ui/core";
import Signup from "../../pages/Signup";
import Login from "../../pages/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const ContentArea = () => {
  return (
    <Grid xs={8} sm={8} md={10} className="content">
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Grid>
  );
};

export default ContentArea;
