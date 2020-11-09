import React from "react";
import ContactsItem from "./ContactsItem";
import {useSelector} from "react-redux";

const ContactsList = ({contacts, isVisible, toggleIsVisible}) => {
    const messagesHistory = useSelector(state => state.messages.messagesHistory);
    const lastMessages = [];

    Object.keys(messagesHistory).forEach(key => lastMessages.push(messagesHistory[key][messagesHistory[key].length - 1]))

    const sortedMessages = lastMessages.sort((a, b) => b.date - a.date).map(message => message.contactId);

    contacts.sort((a, b) => {
        let indexA = sortedMessages.indexOf(a.id);
        let indexB = sortedMessages.indexOf(b.id);
        if (indexA === -1) indexA = contacts.length - 1;
        if (indexB === -1) indexB = contacts.length - 1;
        if (indexA < indexB) return -1;
        if (indexA > indexB) return 1;
        return 0;
    });

    return (
        <ul className="contacts__list">
            {contacts.map((contact) => <ContactsItem key={contact.id} contact={contact} isVisible={isVisible}
                                                     toggleIsVisible={toggleIsVisible}/>)}
        </ul>
    );
};

export default ContactsList;
