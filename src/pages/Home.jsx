import React from "react";
import { Sidebar } from "../components/Sidebar";
import { Chat } from "../components/Chat";
import { HomeWrapper } from "../styles/HomeWrapper";

export const Home = () => {
  return (
    <HomeWrapper>
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </HomeWrapper>
  );
};
