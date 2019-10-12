import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Person } from "@material-ui/icons";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";

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
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { user } = authContext;
  const { setAlert } = alertContext;

  const url = `/rooms/${room.topic}/${room.roomId}`;

  const onClickHandler = e => {
    if (!user) {
      e.preventDefault();
      setAlert("로그인이 필요한 서비스입니다");
    }
  };

  return (
    <Card className={classes.card}>
      <Link to={url} onClick={onClickHandler}>
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
      </Link>
    </Card>
  );
};

export default RoomList;
