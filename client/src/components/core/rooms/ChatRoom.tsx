import React from "react";
import MessageInput from "./messages/MessageInput";
import { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const ChatRoom = () => {
  const { loading } = useSelector((state: RootState) => state.authReducer);

  return (
    <React.Fragment>
      <div id="chatBox">
        <div id="messageBox">
          <MessageInput />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChatRoom;
