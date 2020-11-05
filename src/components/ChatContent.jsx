import React from "react";
import Message from "./Message";
import {useSelector} from "react-redux";

const ChatContent = (props) => {
    const user = useSelector(state => state.auth.user);
    const contacts = useSelector((state) => state.contacts.contactsList);

    const getContactById = (id) => {
        return id === user.id ? user : contacts.find((contact) => contact.id === id);
    }

    return (
        <div className="chat__content">
            {props.messagesHistory ? props.messagesHistory.map((message, index) => <Message
                    contact={getContactById(message.contactId)} key={index} message={message} user={user}/>) :
                <h1>Send your first message</h1>}
        </div>
    );
};

export default ChatContent;

