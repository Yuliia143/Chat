import React, {useState} from "react";
import {useSelector} from "react-redux";
import Search from "./Search";
import ContactsList from "./ContactsList";
import ProfileImg from "./ProfileImg";

const Sidebar = () => {
    const contacts = useSelector(state => state.contacts.contactsList);
    const user = useSelector(state => state.auth.user);
    const [query, setQuery] = useState('');

    const filteredContacts = () => {
        return contacts.filter((contact) => {
            return contact.name.toLowerCase().includes(query.toLowerCase());
        })
    }

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <ProfileImg contact={user}/>
                <Search query={query} setQuery={setQuery}/>
            </div>
            <div className="sidebar__content">
                <h1>Chats</h1>
                <ContactsList contacts={filteredContacts()}/>
            </div>
        </div>
    );
};

export default Sidebar;

