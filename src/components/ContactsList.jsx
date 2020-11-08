import React from "react";
import ContactsItem from "./ContactsItem";
import {useSelector} from "react-redux";

const ContactsList = ({contacts}) => {
    const messagesHistory = useSelector(state => state.messages.messagesHistory);
    const lastMessages = [];
    for (const key in messagesHistory) {
        const lastMessage  = messagesHistory[key][messagesHistory[key].length - 1];
        lastMessages.push(lastMessage);
    }
    const sortedLastMessages = lastMessages.sort((a, b) => b.date - a.date);

    const idIndex = sortedLastMessages.map(message => message.contactId);
    contacts.sort(function (a, b) {

        let indexA = idIndex.indexOf(a.id);
        let indexB = idIndex.indexOf(b.id);
        if (indexA === -1) indexA = contacts.length - 1;
        if (indexB === -1) indexB = contacts.length - 1;
        if (indexA < indexB)  return -1;
        if (indexA > indexB) return 1;
        return 0;
        /*return indexA - indexB;*/
    });
    return (
        <ul className="contacts__list">
            {contacts.map((contact) => <ContactsItem key={contact.id} contact={contact}/>)}
        </ul>
    );
};

export default ContactsList;
