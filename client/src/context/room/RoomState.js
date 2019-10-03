import React, { useReducer } from "react";
import RoomContext from "./roomContext";
import Roomreducer from "./roomreducer";
import Namespace from "../../chatclasses/Namespace";
import Room from "../../chatclasses/Room";
import { MAKE_ROOM } from "../types";

const RoomState = props => {
  const initialState = {};

  const [state, dispatch] = useReducer(Roomreducer, initialState);

  return (
    <RoomContext.Provider value={{}}>{props.children}</RoomContext.Provider>
  );
};

export default AuthState;
