import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles({
  root: {
    width: 220,
    fontSize: "50px",
    marginLeft: "2rem"
  },
  btn: {
    "&:hover": {
      backgroundColor: "#ccebff"
    }
  }
});

export default function Navigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const onClick = e => {};

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="ALL" className={classes.btn} />
      <BottomNavigationAction label="TALK" className={classes.btn} />
      <BottomNavigationAction label="JAM" className={classes.btn} />
    </BottomNavigation>
  );
}
