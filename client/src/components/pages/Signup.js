import React from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Container,
  Divider
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(25),
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  Button: {
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(1.5, 0)
  },
  divider: {
    marginTop: theme.spacing(2)
  },
  subtitle: {
    textAlign: "center",
    marginTop: theme.spacing(2)
  }
}));

export default function Signup() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />
      <div>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.Button}
        >
          Google ID로 회원가입
        </Button>
      </div>
      <Divider className={classes.divider} />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.Button}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}
