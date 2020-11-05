import React from "react";
import ProfileImg from "./ProfileImg";
import moment from "moment";

const Message = (props) => {
    return (
        <div className={props.user.id === props.contact.id ? 'message__container--right' : 'message__container'}>
            {props.user.id !== props.contact.id ? <ProfileImg contact={props.contact}/> : ''}
            <div className="message__content">
                <p className="message__text">{props.message.value}</p>
                <span className="message__date">{moment(props.message.date).format('MM/D/YY, h:mm A')}</span>
            </div>
        </div>
    );
};

export default Message;

