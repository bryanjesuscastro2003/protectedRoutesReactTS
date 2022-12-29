import { ReactNode, useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { contextInterface } from "../interfaces";

export interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const authState = useContext<contextInterface>(AuthContext);

  const logoutMethod = () => {
    authState.actions.logout!();
    alert("See you soon :(");
  };

  return (
    <div>
      <h1>
        Welcome {authState.data.user ? authState.data.user.username : "Brother"}{" "}
      </h1>
      {authState.data.loggedin && (
        <button onClick={logoutMethod}>LogOut</button>
      )}
      {props.children}
    </div>
  );
};

export default Layout;
