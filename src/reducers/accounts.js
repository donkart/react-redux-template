import { ACCOUNTS_FETCH } from "actions/types";

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACCOUNTS_FETCH:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
