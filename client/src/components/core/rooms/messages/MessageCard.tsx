import { Fragment } from "react";
import { Message } from "../../../interfaces";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

const MessageCard = ({ message }: { message: Message }) => {
  if (message.type === "image") {
  }


  return (
    <Fragment>
      <Card>
        <Typography>{message.text}</Typography>
      </Card>
    </Fragment>
  );
};

export default MessageCard;
