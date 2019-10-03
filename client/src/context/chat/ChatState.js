import React, { useReducer } from "react";
import axios from "axios";
import io from "socket.io-client";
import ChatContext from "./chatContext";
import ChatReducer from "./chatReducer";
import { RECEIVE_MESSAGE } from "../types";

let socket;

const ChatState = props => {
  if (!socket) {
    socket = io(":5000");
  }

  const initialState = {
    allChats: [{ from: "user1", msg: "hi" }, { from: "user2", msg: "bye" }],
    members: ["user1", "user2"]
  };

  const receiveMessage = data => {
    dispatch({
      type: RECEIVE_MESSAGE,
      payload: data
    });
  };

  const sendChatAction = msgObj => {
    socket.emit("chat", msgObj);
  };

  const [chatRoomInfo, dispatch] = useReducer(ChatReducer, initialState);

  return (
    <ChatContext.Provider
      value={{
        chatRoomInfo,
        receiveMessage,
        sendChatAction,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatState;
