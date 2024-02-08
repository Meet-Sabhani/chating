import React from "react";
import { SingUpWrapper } from "../styles/singUpWrapper";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

export const Login = () => {
  const navigate = useNavigate();
  const handelSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err) {
      console.log("err: ", err);
      toast.error(err.message);
    }
  };
  return (
    <SingUpWrapper>
      <div className="formWrapper">
        <h3>Loma Chat</h3>
        <p>Login</p>
        <form onSubmit={handelSubmit}>
          <input type="email" placeholder="eneter Your email" />
          <input type="password" placeholder="eneter passWord" />
          <button type="submit">Login</button>
        </form>
        <p>
          You Don't have account <Link to={"/"}>Sing Up</Link>
        </p>
      </div>
    </SingUpWrapper>
  );
};
