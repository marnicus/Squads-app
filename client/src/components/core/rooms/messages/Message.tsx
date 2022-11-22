import { Fragment } from "react";
import { Message } from "../../../interfaces";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

const Message = (message: Message) => {
  if (message.type === "image") {
  }

  if (message.type === "emoji") {
  }

  return (
    <Fragment>
      <Card>
        <Typography>{message.text}</Typography>
      </Card>
    </Fragment>
  );
};

export default Message;
