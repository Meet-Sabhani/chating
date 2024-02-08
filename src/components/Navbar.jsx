import React, { useContext } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <div className="navbar">
      <h2>Privacy</h2>
      <div className="nav-right">
        <img src={currentUser?.photoURL} alt="" />
        <h3>{currentUser?.displayName}</h3>
        <button onClick={() => logout()}>logout</button>
      </div>
    </div>
  );
};
