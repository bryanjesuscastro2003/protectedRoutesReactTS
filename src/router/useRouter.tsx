import React, {
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useState,
  useContext
} from "react";
import { HashRouter, RouteObject, useRoutes } from "react-router-dom";
import HomePage from "../pages/Home";
import LogUpPage from "../pages/LogUp";
import Profile from "../pages/Profile";
import AboutUs from "../pages/AboutUs"
import ErrorPage from "../pages/ErrorPage"

import {AuthContext} from "../context/AuthProvider"
import { contextInterface } from "../interfaces";
import { Navigate } from "react-router-dom";

const useRouter = () => {
  const [loggedin, setLoggedin] = useState<Boolean>(false);
  const authState = useContext<contextInterface>(AuthContext);

  useEffect(() => {
    setLoggedin(authState.data.loggedin);
  }, [authState.data.loggedin])

  let objectRoutes: Array<RouteObject>;

  if (!loggedin)
    objectRoutes = [
      {
        path: "/",
        caseSensitive: true,
        element: <HomePage />,
      },
      {
        path: "/Logup",
        caseSensitive: true,
        element: <LogUpPage />,
      }
    ];
  else
    objectRoutes = [
      {
        path: "/" ,
        element: <Navigate to = "/Profile" />
      },
      {
        path: "/Logup",
        element: <Navigate to = "/Profile" />
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "/Aboutus",
        element: <AboutUs />,
      },
    ];

    objectRoutes.push(
      {
        path: "*",
        element:  !loggedin ? <Navigate to = "/" /> : <ErrorPage redirection= "/Profile" /> //<ErrorPage redirection= {!loggedin ? "/" : "/Profile"} />,
      }
    )

  const AppRoutes = (): ReactElement<
    any,
    string | JSXElementConstructor<any>
  > | null => {
    const routes = useRoutes(objectRoutes);
    return routes;
  };

  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
};

export default useRouter;
