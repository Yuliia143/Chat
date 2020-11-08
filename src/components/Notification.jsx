import React from "react";
import {useDispatch, useSelector} from "react-redux";
import ProfileImg from "./ProfileImg";

const Notification = () => {
    const newMessages = useSelector(state => state.messages.newMessages);
    const contacts = useSelector(state => state.contacts.contactsList);
    const dispatch = useDispatch();

    const closeNotification = (id) => {
        dispatch({type: "CLEAR_NEW-MESSAGE", payload: id})
    }

    const getContactById = (id) => {
        return contacts.find((contact) => contact.id === id);
    }

    return (
        <div className="notification">
            {newMessages.map((newMessage, index) => {
                return <div className="notification__container" key={index}>
                    <button className="notification__button" onClick={() => closeNotification(newMessage.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.806 409.806">
                            <path d="M228.929,205.01L404.596,29.343c6.78-6.548,6.968-17.352,0.42-24.132c-6.548-6.78-17.352-6.968-24.132-0.42
			c-0.142,0.137-0.282,0.277-0.42,0.42L204.796,180.878L29.129,5.21c-6.78-6.548-17.584-6.36-24.132,0.42
			c-6.388,6.614-6.388,17.099,0,23.713L180.664,205.01L4.997,380.677c-6.663,6.664-6.663,17.468,0,24.132
			c6.664,6.662,17.468,6.662,24.132,0l175.667-175.667l175.667,175.667c6.78,6.548,17.584,6.36,24.132-0.42
			c6.387-6.614,6.387-17.099,0-23.712L228.929,205.01z"/>
                        </svg>
                    </button>
                    <ProfileImg contact={getContactById(newMessage.contactId)}/>
                    <div className="notification__content">
                        <p className="contacts__name">{getContactById(newMessage.contactId).name}</p>
                        <p className="contacts__message">{newMessage.value}</p>
                    </div>
                </div>
            })}
        </div>
    )
};

export default Notification;

