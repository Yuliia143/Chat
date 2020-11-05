import {getMessage} from "../../api/messages";

export const getAnswer = (contactId) => {
    return dispatch => getMessage()
        .then((response) => {
            dispatch({ type: 'GET_ANSWER' , payload: {messageValue: response.data.value, contactId}});
        })
        .catch((error) => {
            throw new Error(error);
        })
};
