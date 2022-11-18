import React from "react";
import MessageInput from "./messages/MessageInput";

const ChatRoom = () => {
    const { loading } = useSelector((state: RootState) => state.authReducer);
    
    return <React.Fragment>
        <div id="chatBox">
            <div id="messageBox">
                <MessageInput />
            </div>

        </div>
    </React.Fragment>

}

export default ChatRoom;