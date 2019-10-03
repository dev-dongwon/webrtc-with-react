import React, { useReducer } from "react";
import LobbyContext from "./lobbyContext";
import LobbyReducer from "./lobbyReducer";
import Namespace from "../../chatclasses/Namespace";
import { MAKE_ROOM, JOIN_ROOM } from "../types";
import axios from "axios";

const LobbyState = props => {
  const initialState = { rooms: {}, roomInfo : {} };

  const [state, dispatch] = useReducer(LobbyReducer, initialState);
  const { rooms, roomInfo } = state;

  // load rooms
  const loadRooms = async () => {};

  // join room
  const joinRoom = () => {};

  // make room
  const makeRoom = async formData => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/rooms", formData, config);
      dispatch({ type: MAKE_ROOM, payload: res.data })
    } catch (error) {
      
    }
  };

  return (
    <LobbyContext.Provider value={{ makeRoom, rooms, roomInfo }}>
      {props.children}
    </LobbyContext.Provider>
  );
};

export default LobbyState;
