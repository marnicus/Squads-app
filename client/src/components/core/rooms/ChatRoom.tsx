import MessageInput from "./messages/MessageInput";
import { useState, Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

const ChatRoom = () => {
  const { loading, squadID, squadName, messages } = useSelector(
    (state: RootState) => state.squadRoomReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    
  }, [messages]);
  

  return (
    <Fragment>
      <div id="chatBox">
        {messages.length > 0 ? (
          <Fragment>
            {!loading ? (
              messages.map((message, index) => (
                <Card key={index}>
                  <Card>
                    <Typography variant="body2">{message.text}</Typography>
                  </Card>
                </Card>
              ))
            ) : (
              <Typography variant="h5">Loading messages..</Typography>
            )}
          </Fragment>
        ) : (
          <Fragment>
            <Typography variant="h5">No messages..</Typography>
          </Fragment>
        )}
        <div id="messageBox">
          <MessageInput />
        </div>
      </div>
    </Fragment>
  );
};

export default ChatRoom;
