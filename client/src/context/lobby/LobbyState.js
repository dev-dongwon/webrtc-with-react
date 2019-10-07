import React, { useReducer } from "react";
import axios from "axios";

import LobbyContext from "./lobbyContext";
import LobbyReducer from "./lobbyReducer";

import { MAKE_ROOM, JOIN_ROOM } from "../types";

const LobbyState = props => {
  const initialState = {
    rooms: {},
    room: ""
  };

  const [state, dispatch] = useReducer(LobbyReducer, initialState);
  const { rooms, room } = state;

  // load rooms
  const loadRooms = async () => {};

  // join room
  const joinRoom = () => {};

  // make room
  const makeRoom = async (formData, topic) => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post(`/api/rooms/${topic}`, formData, config);
      const room = res.data;

      dispatch({ type: MAKE_ROOM, payload: room });
    } catch (error) {}
  };

  return (
    <LobbyContext.Provider value={{ makeRoom, room }}>
      {props.children}
    </LobbyContext.Provider>
  );
};

export default LobbyState;
