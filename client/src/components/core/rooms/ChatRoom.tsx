import React from "react";
import MessageInput from "./messages/MessageInput";

const ChatRoom = () => {
    return <React.Fragment>
        <div id="chatBox">
            <div id="messageBox">
                <MessageInput />
            </div>

        </div>
    </React.Fragment>

}

export default ChatRoom;