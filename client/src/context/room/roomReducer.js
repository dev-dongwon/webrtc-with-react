import { JOIN_ROOM, LEAVE_ROOM, RECEIVE_CHAT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case JOIN_ROOM:
      return {
        ...state,
        userList: [...state["userList"], action.payload]
      };
    case RECEIVE_CHAT:
      return {
        ...state,
        chatList: [...state["chatList"], action.payload]
      };
    case LEAVE_ROOM:
      return {
        chatList: [],
        userList: []
      };
    default:
      return state;
  }
};
