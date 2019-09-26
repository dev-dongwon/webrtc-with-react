import React from "react";
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Container,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(25),
    textDecoration: "none",
    backgroundColor: "transparent",
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

export default function SignIn() {
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
          Google Login
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.Button}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/">Forgot password?</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Divider className={classes.divider} />
      <div className={classes.subtitle}>
        <b>아직 아이디가 없으신가요?</b>
      </div>
      <div>
        <Link href="/signup">
          <Button
            fullWidth
            variant="outlined"
            className={classes.Button}
            color="white"
          >
            회원가입
          </Button>
        </Link>
      </div>
    </Container>
  );
}
