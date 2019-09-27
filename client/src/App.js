import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SideMenu from "./components/layout/menu/SideMenu";
import { Grid, CssBaseline } from "@material-ui/core";
import ContentArea from "./components/layout/content/ContentArea";
import AuthState from "./context/auth/AuthState";
import "./App.css";

const App = () => {
  return (
    <AuthState>
      <Router>
        <Grid container>
          <CssBaseline />
          <SideMenu />
          <ContentArea />
        </Grid>
      </Router>
    </AuthState>
  );
};

export default App;
