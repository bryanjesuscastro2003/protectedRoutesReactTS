import { contextInterface, userInterface } from "../interfaces";
import { initialState } from "./AuthProvider";

type actionType = {
  type: "Loggedin" | "LogUp" | "LogOut";
  payload?: userInterface;
};

const users: Array<userInterface> = [
  {
    username: "bryan",
    password: "bryan",
    email: "jesus",
  },
];

export const authReducer = (
  state: contextInterface,
  action: actionType
): contextInterface => {
  switch (action.type) {
    case "Loggedin":
      const user = users.find(
        (us) =>
          us.username === action.payload!.username &&
          us.password === action.payload!.password
      );
      return {
        ...state,
        data: {
          ...state.data,
          loggedin: user ? true : false,
          user: user ? user : null,
          message: user ? "OK" : "BadLogin",
        },
      };
    case "LogUp":
      users.push(action.payload!);
      return {
        ...state,
        data: {
          ...state.data,
          loggedin: true,
          user: action.payload!,
          message: "OK",
        },
      };
    case "LogOut":
      return initialState;
    default:
      return state;
  }
};
