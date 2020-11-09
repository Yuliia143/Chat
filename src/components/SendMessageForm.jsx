import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAnswer} from "../store/actions/messages";

const SendMessageForm = ({user}) => {
    const dispatch = useDispatch();
    const activeContact = useSelector((state => state.contacts.activeContact))
    const [value, setValue] = useState('');

    const handleMessageQuery = (event) => {
        setValue(event.target.value);
    };

    const sendMessage = (e, value) => {
        e.preventDefault();
        const messageId = '_' + Math.random().toString(36).substr(2, 9);
        dispatch({
            type: 'SEND_MESSAGE', payload: {
                message: {
                    id: messageId,
                    value,
                    contactId: activeContact.id,
                    date: Date.now(),
                    author: user.id
                },
                activeContact: activeContact
            }
        });
        dispatch(getAnswer(activeContact.id, messageId));
        setValue('');
    }

    return (
        <div className="send-form__container">
            <form className="send-form" onSubmit={(e) => sendMessage(e, value)}>
                <label>
                    <input
                        value={value}
                        type="text"
                        className="send-form__input"
                        placeholder="Type your message"
                        onChange={handleMessageQuery}
                    />
                    <button className="send-form__button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M505.847,246.045L16.108,1.175C12.034-0.862,7.128-0.21,3.725,2.821c-3.403,3.032-4.612,7.83-3.054,12.112L88.331,256
			L0.671,497.066c-1.557,4.282-0.347,9.08,3.054,12.113c2.084,1.857,4.732,2.82,7.407,2.82c1.693,0,3.397-0.386,4.975-1.175
			l489.739-244.87c3.772-1.885,6.153-5.739,6.153-9.955S509.619,247.93,505.847,246.045z M31.138,478.422L107.97,267.13h58.987
			c6.146,0,11.13-4.984,11.13-11.13s-4.984-11.13-11.13-11.13H107.97L31.138,33.577L475.982,256L31.138,478.422z"/>
                            <path d="M203.917,244.869h-0.136c-6.146,0-11.13,4.984-11.13,11.13s4.984,11.13,11.13,11.13h0.136
			c6.146,0,11.13-4.984,11.13-11.13S210.064,244.869,203.917,244.869z"/>
                        </svg>
                    </button>
                </label>
            </form>
        </div>
    );
};

export default SendMessageForm;
