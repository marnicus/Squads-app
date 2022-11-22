import TextField from "@mui/material/TextField";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { Message } from "../../../interfaces";

const MessageInput = () => {
  const [text, setText] = useState<string>("");
  const { squadMember } = useSelector((state: RootState) => state.authReducer);
  const dispatch = useDispatch();

    const handlePost = async (e: React.FormEvent<HTMLFormElement>) => {
        const newMessage: Message = {
          
      }
  };

  return (
    <Fragment>
      <TextField
        id="messageInput"
        label="Send a message"
        variant="outlined"
        fullWidth
        value={text}
        onChange={handlePost}
      />
    </Fragment>
  );
};

export default MessageInput;
