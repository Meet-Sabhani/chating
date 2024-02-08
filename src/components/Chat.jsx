import React from "react";
import { ChatStyle } from "../styles/ChatStyle";
import { Messages } from "./Messages";
import { Input } from "./Input";

export const Chat = () => {
  return (
    <ChatStyle>
      <div className="chatInfo">
        <h4>dhruvesh</h4>
        <div className="icons">
          <i className="fas fa-video"></i>
          <i className="fas fa-user-plus"></i>
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
      <Messages />
      <Input />
    </ChatStyle>
  );
};
