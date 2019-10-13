import { GET_LOGS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_LOGS: {
      return {
        ...state,
        logData: action.payload
      };
    }
    default:
      return state;
  }
};
