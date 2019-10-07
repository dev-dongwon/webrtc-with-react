import React, { useReducer, useContext } from "react";
import io from "socket.io-client";

import RoomContext from "./roomContext";
import RoomReducer from "./roomReducer";
import AuthContext from "../../context/auth/authContext";

import { JOIN_ROOM, LEAVE_ROOM, SEND_CHAT, RECEIVE_CHAT } from "../types";

let socket;

const RoomState = props => {
  const initialState = {
    chatList: [],
    userList: []
  };

  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const [state, dispatch] = useReducer(RoomReducer, initialState);
  const { chatList, userList } = state;

  // connect Room
  const connectRoom = (namespace, user, roomId) => {
    if (!socket) {
      socket = io(`http://localhost:5000/${namespace}`, {
        query: {
          username: user.name
        }
      });
      socket.emit("join", roomId, number => {
        console.log(number);
      });
    }
  };

  // receive chat
  const receiveChat = () => {
    socket.on("chat", data => {
      dispatch({ type: RECEIVE_CHAT, payload: data });
    });
  };

  // join Room
  const joinRoom = () => {
    socket.emit("join", username => {
      const msg = `${username}님이 입장하셨습니다`;
      dispatch({ type: JOIN_ROOM, payload: username });
    });
  };

  // leave Room
  const leaveRoom = () => {};

  // send chat
  const sendChat = msgObj => {
    socket.emit("chat", msgObj);
  };

  return (
    <RoomContext.Provider
      value={{
        chatList,
        userList,
        joinRoom,
        leaveRoom,
        sendChat,
        receiveChat,
        connectRoom
      }}
    >
      {props.children}
    </RoomContext.Provider>
  );
};

export default RoomState;
