import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SideMenu from "./components/layout/menu/SideMenu";
import { Grid, CssBaseline } from "@material-ui/core";
import ContentArea from "./components/layout/content/ContentArea";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Grid container component="main">
        <CssBaseline />
        <SideMenu />
        <ContentArea />
      </Grid>
    </Router>
  );
};

export default App;
