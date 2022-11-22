import { Card, Typography } from "@mui/material";
import { Fragment } from "react";
import { Message } from "../../../interfaces";

const MyMessage = (message: Message) => {
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

export default MyMessage;
