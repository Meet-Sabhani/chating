import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase";

export const Search = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  console.log("user: ", user);

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
  // const handleKey = (e) => {
  //   e.code === "Enter" && handleSearch();
  // };
  const handleKey = (e) => {
    if (e.code === "Enter") {
      handleSearch();
    }
  };

  const handleSelect = () => {};

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
