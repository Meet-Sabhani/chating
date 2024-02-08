import React from "react";
import { SingUpWrapper } from "../styles/singUpWrapper";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

export const Singup = () => {
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const userName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log("res: ", res);
      toast.success("sing Up SuccessFully");
      navigate("/login");

      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          console.log("error: ", error, error.message);
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log("downloadURL: ", downloadURL);
            await updateProfile(res.user, {
              userName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              userName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/home");
          });
        }
      );
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  return (
    <SingUpWrapper>
      <div className="formWrapper">
        <h3>Chating privacy</h3>
        <p>SingUp</p>
        <form onSubmit={handelSubmit}>
          <input type="text" placeholder="enter Your name" />
          <input type="email" placeholder="enter Your email" />
          <input type="password" placeholder="enter passWord" />
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <i className="fa-regular fa-image"></i> add your dp
          </label>
          <button type="submit">Sing up</button>
        </form>
        <p>
          You already account <Link to={"/login"}>Login</Link>
        </p>
      </div>
    </SingUpWrapper>
  );
};
