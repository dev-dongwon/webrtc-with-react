import React, { useReducer, useContext } from "react";
import io from "socket.io-client";

import RoomContext from "./roomContext";
import RoomReducer from "./roomReducer";
import AuthContext from "../../context/auth/authContext";

import { JOIN_ROOM, LEAVE_ROOM, RECEIVE_CHAT } from "../types";

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
      socket.emit("join", roomId, obj => {
        const { userNumbers, username } = obj;
        socket.emit("chat", {
          roomId,
          from: "server:entrance",
          msg: username
        });
        console.log(userNumbers);
      });
      receiveChat();
    }
  };

  // receive chat
  const receiveChat = () => {
    socket.on("chat", data => {
      dispatch({ type: RECEIVE_CHAT, payload: data });
    });
  };

  const windowBackEvent = () => {
    window.addEventListener(
      "popstate",
      event => {
        leaveRoom();
        window.location = document.referrer;
      },
      false
    );
  };

  // leave Room
  const leaveRoom = () => {
    socket.close();
    socket = null;
    dispatch({ type: LEAVE_ROOM });
  };

  // send chat
  const sendChat = msgObj => {
    socket.emit("chat", msgObj);
  };

  return (
    <RoomContext.Provider
      value={{
        chatList,
        userList,
        leaveRoom,
        sendChat,
        receiveChat,
        connectRoom,
        windowBackEvent
      }}
    >
      {props.children}
    </RoomContext.Provider>
  );
};

export default RoomState;
