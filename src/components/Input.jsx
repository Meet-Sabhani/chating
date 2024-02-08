import React from "react";

export const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="type message ... " />
      <div className="send">
        <i className="fas fa-paperclip"></i>
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <i className="fas fa-images"></i>
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};
