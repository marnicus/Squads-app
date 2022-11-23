import MessageInput from "./messages/MessageInput";
import { useState, Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import Typography from "@mui/material/Typography";
import { getChatData } from "../../../api/dbAPI";
import { Message, SquadChat } from "../../interfaces";
import MessageCard from './messages/MessageCard';
import Grid from "@mui/material/Grid";
import MyMessage from "./messages/MyMessageCard";

const ChatRoom = () => {
  const { loading, squadId, squadName } = useSelector(
    (state: RootState) => state.squadRoomReducer
  );
  const { squadMember } = useSelector(
    (state: RootState) => state.authReducer
  );
  const [messages, setMessages] = useState<Message[]>([]);
  const [initFinished, setInitFinished] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (squadId) {

      initChat();
    }
  }, [squadId]);

  const initChat = async () => {

    if (!initFinished) {
      const results: SquadChat = await getChatData(squadId);
      setMessages(results.messages);
    }
    setInterval(async () => {
      const results: SquadChat = await getChatData(squadId);

      if (results) {

        if (initFinished && results.messages.length !== messages.length) {
          setMessages(results.messages);
        }

      }
    }, 10000);
    setInitFinished(true);
  }

  if (!squadId) {
    return <Fragment>
      <Typography variant="h4">Please select a squad</Typography>
    </Fragment>
  }

  return (
    <Fragment>
      <div id="chatBox">
        {messages.length > 0 ? (
          <Fragment>
            <Grid container>
              {
                messages.map((message, index) => {
                  if (message.member._id === squadMember?._id) {
                    return <Fragment key={index}>
                      <Grid item justifyContent="flex-start">
                        <MyMessage message={message} />
                      </Grid>
                    </Fragment>
                  }
                  return <Fragment key={index}>
                    <Grid item justifyContent="flex-end">
                      <MessageCard message={message} />
                    </Grid></Fragment>
                })
              }
            </Grid>
          </Fragment>
        ) : (
          <Fragment>
            <Typography variant="h5">No messages..</Typography>
          </Fragment>
        )
        }
        <div id="messageBox">
          <MessageInput />
        </div>
      </div >
    </Fragment >
  );
};

export default ChatRoom;
