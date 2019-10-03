import { MAKE_ROOM, REMOVE_ROOM, JOIN_ROOM } from "../types";

export default (state, action) => {
  switch (action.type) {
    case MAKE_ROOM:
      return {
        ...state,
        roomInfo: action.payload
      };

    default:
      return state;
  }
};
