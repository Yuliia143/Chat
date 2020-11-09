import React from "react";
import ContactsItem from "./ContactsItem";
import {useSelector} from "react-redux";

const ContactsList = ({contacts, isVisible, toggleIsVisible}) => {
    const messagesHistory = useSelector(state => state.messages.messagesHistory);
    const lastMessages = [];
    for (const key in messagesHistory) {
        const lastMessage  = messagesHistory[key][messagesHistory[key].length - 1];
        lastMessages.push(lastMessage);
    }
    const idIndex = lastMessages.sort((a, b) => b.date - a.date).map(message => message.contactId);
    console.log(lastMessages.sort((a, b) => b.date - a.date), 'message')

    console.log(idIndex, 'id')
    contacts.sort(function (a, b) {
        let indexA = idIndex.indexOf(a.id);
        let indexB = idIndex.indexOf(b.id);
        if (indexA === -1) indexA = contacts.length - 1;
        if (indexB === -1) indexB = contacts.length - 1;
        if (indexA < indexB) return -1;
        if (indexA > indexB) return 1;
        return 0;
    });

    return (
        <ul className="contacts__list">
            {contacts.map((contact) => <ContactsItem key={contact.id} contact={contact} isVisible={isVisible} toggleIsVisible={toggleIsVisible}/>)}
        </ul>
    );
};

export default ContactsList;
