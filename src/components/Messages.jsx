import React from "react";
import { Message } from "./Message";
import { MessageStyle } from "../styles/MessageStyle";

export const Messages = () => {
  return (
    <MessageStyle>
      <Message />
      <Message />
      <Message />
      <Message />
    </MessageStyle>
  );
};
