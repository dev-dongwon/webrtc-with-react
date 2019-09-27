import React, { Fragment } from "react";
import { Grid, Paper } from "@material-ui/core";
import Signup from "../../auth/Signup";
import Login from "../../auth/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const ContentArea = () => {
  return (
    <Fragment>
      <Grid item xs={2} sm={2} md={2}></Grid>
      <Grid item xs={8} sm={8} md={10} className="content">
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Grid>
    </Fragment>
  );
};

export default ContentArea;
