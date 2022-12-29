import React, { useContext, useEffect, useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { authReducer } from "../context/AuthReducer";
import { contextInterface, userInterface } from "../interfaces";

const Home = () => {
  const authState = useContext<contextInterface>(AuthContext);
  const navigate = useNavigate();
  const [FormData, SetFormData] = useState<userInterface>({
    username: "",
    password: "",
  });

  const loginMethod = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    authState.actions.login!({
      username: FormData.username,
      password: FormData.password,
    });
  };

  useEffect(() => {
    authState.data.message === "BadLogin"
      ? alert("Bad login")
      : authState.data.message === "OK" && alert("Login successfully");
    authState.data.message === "BadLogin" && navigate(0);
  }, [authState]);

  return (
    <div>
      Home Page
      <Link to="/Logup">Logup</Link>
      <form onSubmit={loginMethod}>
        <input
          type="text"
          value={FormData.username}
          onChange={(e) =>
            SetFormData({ ...FormData, username: e.target.value })
          }
          placeholder="Username"
        />
        <input
          type="password"
          value={FormData.password}
          onChange={(e) =>
            SetFormData({ ...FormData, password: e.target.value })
          }
          placeholder="Password"
        />
        <button> Get into </button>
      </form>
    </div>
  );
};

export default Home;
