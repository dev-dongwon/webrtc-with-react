import { RECEIVE_MESSAGE } from "../types";

export default (state, action) => {
  const { from, msg } = action.payload;

  switch (action.type) {
    case RECEIVE_MESSAGE:
      return [
        ...state,
        { from, msg }
      ];
    default:
      return state;
  }
};
