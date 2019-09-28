import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Badge,
  makeStyles,
  Typography,
  Box
} from "@material-ui/core";
import { Mail, Home, MusicNote } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: "transparent",
    textAlign: "center",
    margin: "auto",
    marginTop: "10%",
    color: "white"
  },
  text: {
    paddingLeft: "5%"
  },
  item: {
    paddingLeft: "10%"
  }
}));
export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Typography variant="h6" letterSpacing={2}>
        <Box letterSpacing={6} m={1}>
          <span><MusicNote /></span>  Volroom Up
        </Box>
      </Typography>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button className={classes.item}>
          <Home />
          <ListItemText primary="Home" className={classes.text} />
        </ListItem>
        <ListItem button className={classes.item}>
          <Badge className={classes.margin} badgeContent={4} color="primary">
            <Mail />
          </Badge>
          <ListItemText primary="Message" className={classes.text} />
        </ListItem>
      </List>
    </div>
  );
}
