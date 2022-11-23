import { Card, Typography } from "@mui/material";
import { Fragment } from "react";
import { Message } from "../../../interfaces";

const MyMessage = ({ message }: { message: Message }) => {
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

export default MyMessage;
