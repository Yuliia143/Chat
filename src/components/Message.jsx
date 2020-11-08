import React from "react";
import ProfileImg from "./ProfileImg";
import moment from "moment";

const Message = ({user, message, contact}) => {
    return (
        <div className={user.id === message.author ? 'message__container--right' : 'message__container'}>
            {user.id !== message.author ? <ProfileImg contact={contact} isVisible={false}/> : ''}
            <div className="message__content">
                <p className="message__text">{message.value}</p>
                <span className="message__date">{moment(message.date).format('MM/D/YY, h:mm A')}</span>
            </div>
        </div>
    );
};

export default Message;

