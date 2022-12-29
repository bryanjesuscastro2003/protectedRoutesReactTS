import  { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { contextInterface } from "../interfaces";

const Profile = () => {
  const authState = useContext<contextInterface>(AuthContext);

  return (
    <div>
      <h1>Profile</h1>
      <Link to="/Aboutus">About us</Link>
      <h4>
        Your username is :{" "}
        {authState.data.user && authState.data.user!.username}
      </h4>
      <h4>
        Your email is : {authState.data.user && authState.data.user!.email}
      </h4>
    </div>
  );
};

export default Profile;
