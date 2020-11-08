import {getMessage} from "../../api/messages";

export const getAnswer = (contactId, messageId) => {
    return dispatch => getMessage()
        .then((response) => {
            setTimeout(() => {
                dispatch({type: 'GET_ANSWER', payload: {messageValue: response.data.value, contactId, messageId}});
            }, 10000);
            setTimeout(() => {
                dispatch({type: "CLEAR_NEW-MESSAGE", payload: messageId});
            }, 15000);
        })
        .catch((error) => {
            throw new Error(error);
        })
};
