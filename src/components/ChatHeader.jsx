import React from "react";
import ProfileImg from "./ProfileImg";
import {useSelector} from "react-redux";

const ChatHeader = () => {
    const activeContact = useSelector(state => state.contacts.activeContact);

    return (
        <div className="chat__header">
            <div className="contacts__item">
                <ProfileImg contact={activeContact}/>
                <div>
                    <p>{activeContact.name}</p>
                </div>
            </div>
        </div>
    );
};

export default ChatHeader;
