import React from "react";
import { Navbar } from "./Navbar";
import { Search } from "./Search";
import { Chats } from "./Chats";
import { SidebarStyle } from "../styles/SlidebarStyle";

export const Sidebar = () => {
  return (
    <SidebarStyle>
      <div className="sidebar">
        <Navbar />
        <Search />
        <Chats />
      </div>
    </SidebarStyle>
  );
};
