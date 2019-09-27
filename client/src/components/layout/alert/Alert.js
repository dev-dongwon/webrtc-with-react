import React, { useContext, useState, Fragment } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import AlertContext from "../../../context/alert/alertContext";
import { Grid } from "@material-ui/core";

const Alert = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <div key={alert.id}>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          open={true}
          message={alert.msg}
        />
      </div>
    ))
  );
};

export default Alert;
