import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Badge,
  makeStyles,
  Typography
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
      <MusicNote />
      <Typography variant="h6">Volroom Up</Typography>
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
