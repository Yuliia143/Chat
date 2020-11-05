import React from "react";
import {useDispatch, useSelector} from "react-redux";
import ProfileImg from "./ProfileImg";
import moment from "moment";

const ContactsItem = (props) => {
    const dispatch = useDispatch();
    const messagesHistory = useSelector(state => state.messages.messagesHistory);

    const getLastMessage = (contactId) => {
        return props.contact.id in messagesHistory ? messagesHistory[contactId][messagesHistory[contactId].length-1] : '';
    }

    return (
        <li className="contacts__item" key={props.contact.id}
            onClick={() => dispatch({type: 'SET_ACTIVE', payload: props.contact})}>
            <ProfileImg contact={props.contact}/>
            <div className="contacts__content">
                <p className="contacts__name">{props.contact.name}</p>
                {getLastMessage(props.contact.id) ?
                    <>
                        <p className="contacts__date">{moment(getLastMessage(props.contact.id).date).format('MMM D , YYYY')}</p>
                        <p className="contacts__message">{getLastMessage(props.contact.id).value}</p>
                    </> : ''}
            </div>
        </li>
    );
};

export default ContactsItem;
