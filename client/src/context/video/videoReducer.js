import { GET_MY_SRC } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_MY_SRC:
      return {
        ...state,
        myVideoSrcObj: action.payload
      };
    default:
      return state;
  }
};
