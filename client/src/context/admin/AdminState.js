import React, { useReducer } from "react";
import AdminContext from "./adminContext";
import adminReducer from "./adminReducer";

import { GET_LOGS } from "../types";

const AdminState = props => {
  const initialState = {
    logData: []
  };

  const [state, dispatch] = useReducer(adminReducer, initialState);
  const { logData } = state;

  const loadData = () => {
    try {
      const res = await axios.get("/api/logs");
      console.log(res);
      dispatch({ type: GET_LOGS, payload: res.data });
    } catch (error) {

    }
  }

  return (
    <AdminContext.Provider value={{
      logData, loadData
    }}>{props.children}</AdminContext.Provider>
  );
};

export default AdminState;
