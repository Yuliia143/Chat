import React from "react";
import ContactsItem from "./ContactsItem";
import {useSelector} from "react-redux";

const ContactsList = (props) => {
    const messagesHistory = useSelector(state => state.messages.messagesHistory);

    const lastMessages = [];
    for (const key in messagesHistory) {
        lastMessages.push(messagesHistory[key][messagesHistory[key].length - 1]);
    }

    const sortedLastMessages = lastMessages.sort((a, b) => b.date - a.date);

    const idIndex = sortedLastMessages.map(message => message.contactId);
    props.contacts.forEach(contact => {
        if (idIndex.indexOf(contact.id) === -1) {
            idIndex.push(contact.id);
        }
    })
    console.log(idIndex, 'idIndex')

    props.contacts.sort(function (a, b) {
        return idIndex.indexOf(a.id) - idIndex.indexOf(b.id);
    });

    return (
        <ul className="contacts__list">
            {props.contacts.map((contact) => <ContactsItem key={contact.id} contact={contact}/>)}
        </ul>
    );
};

export default ContactsList;
