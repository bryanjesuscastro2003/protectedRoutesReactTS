import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { contextInterface, userInterface } from "../interfaces";

const LogUp = () => {
  const authState = useContext<contextInterface>(AuthContext);
  const navigate = useNavigate();
  const [FormData, SetFormData] = useState<userInterface>({
    username: "",
    password: "",
    email: "",
  });

  const logupMethod = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    authState.actions.logup!(FormData);
  };

  useEffect(() => {
    authState.data.message === "BadLogin"
      ? alert("Bad logup")
      : authState.data.message === "OK" && alert("Logup successfully");
    authState.data.message === "BadLogin" && navigate(0);
  }, [authState]);

  return (
    <div>
      LogUp Page
      <Link to="/">Home</Link>
      <form onSubmit={logupMethod}>
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
        <input
          type="text"
          value={FormData.email}
          onChange={(e) => SetFormData({ ...FormData, email: e.target.value })}
          placeholder="Email"
        />
        <button> Get into </button>
      </form>
    </div>
  );
};

export default LogUp;
