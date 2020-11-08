import React from "react";
import {useDispatch, useSelector} from "react-redux";
import ProfileImg from "./ProfileImg";
import moment from "moment";

const ContactsItem = ({contact}) => {
    const dispatch = useDispatch();
    const messagesHistory = useSelector(state => state.messages.messagesHistory);

    const getLastMessage = (contactId) => {
        return contact.id in messagesHistory ? messagesHistory[contactId][messagesHistory[contactId].length-1] : '';
    }

    return (
        <li className="contacts__item" key={contact.id}
            onClick={() => dispatch({type: 'SET_ACTIVE', payload: contact})}>
            <ProfileImg contact={contact}/>
            <div className="contacts__content">
                <p className="contacts__name">{contact.name}</p>
                {getLastMessage(contact.id) ?
                    <>
                        <p className="contacts__date">{moment(getLastMessage(contact.id).date).format('MMM D , YYYY')}</p>
                        <p className="contacts__message">{getLastMessage(contact.id).value}</p>
                    </> : ''}
            </div>
        </li>
    );
};

export default ContactsItem;
