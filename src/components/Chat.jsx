import React from "react";
import ChatHeader from "./ChatHeader";
import ChatContent from "./ChatContent";
import SendMessageForm from "./SendMessageForm";
import {useSelector} from "react-redux";

const Chat = ({isVisible, toggleIsVisible}) => {
    const activeContact = useSelector(state => state.contacts.activeContact);
    const messagesHistory = useSelector(state => state.messages.messagesHistory)[activeContact.id];
    const user = useSelector(state => state.auth.user);
    return (
        <div className="chat__container">
            <ChatHeader isVisibleMenu={isVisible} toggleIsVisibleMenu={toggleIsVisible}/>
            <ChatContent messagesHistory={messagesHistory}/>
            <SendMessageForm messagesHistory={messagesHistory} user={user} activeContact={activeContact}/>
        </div>
    );
};

export default Chat;
