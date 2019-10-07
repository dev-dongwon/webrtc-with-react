import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Person } from "@material-ui/icons";

const useStyles = makeStyles({
  card: {
    width: "21%",
    height: "200px",
    border: "1px solid black",
    margin: "2%",
    float: "left"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const RoomList = ({ room }) => {
  const classes = useStyles();
  const url = `/rooms/${room.topic}/${room.roomId}`;

  return (
    <Link to={url}>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {room.topic}
          </Typography>
          <Typography variant="h5" component="h2">
            {room.roomName}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {room.hostId}
          </Typography>
        </CardContent>
        <CardActions>
          <Person></Person>
        </CardActions>
      </Card>
    </Link>
  );
};

export default RoomList;
