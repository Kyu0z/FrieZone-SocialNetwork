import { initState } from "./init";

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return Object.assign({}, state, {
        token: action.token,
        user: action.user,
      });
    case "SIGN_OUT":
      return Object.assign({}, state, {
        ...initState,
      });
    default:
      return state;
  }
};
