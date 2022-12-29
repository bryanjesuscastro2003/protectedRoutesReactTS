import React, { createContext, ReactNode, useReducer } from "react";
import { contextInterface, userInterface } from "../interfaces";
import { authReducer } from "./AuthReducer";

export interface Props {
  children: ReactNode;
}

export const initialState: contextInterface = {
  data: { loggedin: false, user: null, message: "" },
  actions: {},
};
export const AuthContext = createContext<contextInterface>(initialState);

const AuthProvider = (props: Props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const setLogin = ({ username, password }: userInterface) => {
    dispatch({
      type: "Loggedin",
      payload: { username, password },
    });
  };

  const setLogup = (user: userInterface) => {
    dispatch({
      type: "LogUp",
      payload: user,
    });
  };

  const setLogout = () => {
    dispatch({
      type: "LogOut",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        actions: { login: setLogin, logup: setLogup, logout: setLogout },
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
