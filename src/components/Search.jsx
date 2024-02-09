import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

export const Search = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  console.log("user: ", user);

  const { currentUser } = useContext(AuthContext);
  console.log("currentUser: ", currentUser);

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("userName", "==", userName));
    console.log("q: ", q);

    try {
      // const querySnapshot = await getDocs(q);
      // querySnapshot.forEach((doc) => {
      //   setUser(doc.data());
      // });
      const querySnapshot = await getDocs(q);

      if (querySnapshot.docs.length > 0) {
        // If there are matching users
        const userData = querySnapshot.docs[0].data();
        setUser(userData);
      } else {
        // If no matching users found
        setUser(null);
        toast.info("User not found");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleKey = (e) => {
    if (e.code === "Enter") {
      handleSearch();
    }
  };

  const handleSelect = async () => {
    const combineId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combineId));
      if (!res.exists()) {
        await setDoc(doc(db, "chats", combineId), { message: [] });
        await updateDoc(
          doc(db, "userChats", currentUser.uid),
          {
            [combineId + ".userInfo"]: {
              uid: user.uid,
              userName: user.userName,
              photoURL: user.photoURL,
            },
            [combineId + ".date"]: serverTimestamp(),
          },
          { merge: true }
        );

        await updateDoc(doc(db, "userChats", user.uid), {
          [combineId + ".userInfo"]: {
            uid: currentUser.uid,
            userName: currentUser.userName,
            photoURL: currentUser.photoURL,
          },
          [combineId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {
      console.log("error: ", error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="search">
      <div className="search-input">
        <input
          type="text"
          placeholder="search name"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKey}
        />
      </div>
      {user && (
        <div
          className="userChat"
          onClick={handleSelect}
          style={{ borderBottom: "1px solid #FFF" }}
        >
          <img src={user?.photoURL} alt="" />
          <div className="userChatIno">
            <h3>{user?.userName}</h3>
            <p>Lorem, ipsum.</p>
          </div>
        </div>
      )}
    </div>
  );
};
