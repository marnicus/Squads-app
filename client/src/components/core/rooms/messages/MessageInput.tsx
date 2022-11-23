import TextField from "@mui/material/TextField";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import InputEmoji from 'react-input-emoji';
import { FormControl, Grid, IconButton } from "@mui/material";
import SendOutlined from "@mui/icons-material/SendOutlined";
import { postMessage } from "../../../../redux/squadRoomSlice";
import { sendMessage } from "../../../../api/dbAPI";
import { v4 as uuidv4 } from 'uuid';
import { Post } from "../../../interfaces";

const MessageInput = () => {
  const [text, setText] = useState<string>("");
  const { squadMember } = useSelector((state: RootState) => state.authReducer);
  const { squadId } = useSelector((state: RootState) => state.squadRoomReducer);
  const dispatch = useDispatch();

  const handlePost = async (text: string) => {
    const newMessage: Post = {
      _id: uuidv4(),
      squadId,
      type: 'text',
      member: squadMember!,
      text: text,
      createdAt: new Date().toTimeString()
    }
    console.log(`New Message: ${JSON.stringify(newMessage)}`);
    // dispatch(postMessage(newMessage));
    await sendMessage(newMessage);
  };

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={8}>
          <FormControl fullWidth>
            <InputEmoji
              value={text}
              onChange={setText}
              cleanOnEnter
              onEnter={handlePost}
              placeholder="Type a message"
            />
          </FormControl>
        </Grid>
        <Grid item >
          <IconButton color="primary"><SendOutlined /></IconButton>
        </Grid>
      </Grid>

    </Fragment>
  );
};

export default MessageInput;
