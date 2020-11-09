import React, {useEffect, useRef} from "react";
import Message from "./Message";
import {useSelector} from "react-redux";

const ChatContent = ({messagesHistory}) => {
    const user = useSelector(state => state.auth.user);
    const contacts = useSelector(state => state.contacts.contactsList);
    const bottomRef = useRef(null)

    const scrollToBottom = () => {
        bottomRef.current.scrollIntoView({behavior: 'smooth'})
    }
    const getContactById = (id) => {
        return id === user.id ? user : contacts.find((contact) => contact.id === id);
    }

    useEffect(scrollToBottom, [JSON.stringify(messagesHistory)])

    return (
        <div className="chat__content">
            {messagesHistory ? messagesHistory.map((message, index) => <Message
                    contact={getContactById(message.contactId)} key={index} message={message} user={user}/>) :
                <h1>Send your first message</h1>}
            <div ref={bottomRef}/>
        </div>
    );
};

export default ChatContent;

