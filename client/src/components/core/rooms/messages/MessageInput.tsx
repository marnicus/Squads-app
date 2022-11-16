import TextField from "@mui/material/TextField";
import React from "react";

const MessageInput = () => {
    return <React.Fragment>
        <TextField id="messageInput" label="Send a message" variant="outlined" fullWidth />
    </React.Fragment>

}

export default MessageInput;