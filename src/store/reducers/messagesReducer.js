const initialState = {
    messagesHistory: {
        '1': [{contactId: '1', value: 'Hello', date: Date.now()},
            {contactId: '1111', value: 'Hi', date: Date.now()},
            {contactId: '1', value: 'How are you?', date: Date.now()}],
        '3': [{contactId: '3', value: 'Hi, there', date: Date.now()},
            {contactId: '1111', value: 'Yo', date: Date.now()},
            {contactId: '3', value: 'What are you doing?', date: Date.now()}],
    },
    newMessage: {},
};

export default function (state = initialState, action) {
    let messagesHistory = {};
    let newMessage = {};
    switch (action.type) {
        case 'SEND_MESSAGE':
            messagesHistory = Object.assign({}, state.messagesHistory);
            action.payload.activeContact.id in messagesHistory ?
                messagesHistory[action.payload.activeContact.id].push(action.payload.message) :
                messagesHistory[action.payload.activeContact.id] = [action.payload.message];
            return {
                messagesHistory,
            };
        case 'GET_ANSWER':
            messagesHistory = Object.assign({}, state.messagesHistory);
            const message = {
                value: action.payload.messageValue,
                date: Date.now(),
                contactId: action.payload.contactId,
            }
            messagesHistory[message.contactId].push(message);
            newMessage = message;
            return {
                messagesHistory,
                newMessage,
            };
        case 'CLEAR_NEW-MESSAGE':
            newMessage = {};
            return {
                ...state,
                newMessage,
            }
        default:
            return state;
    }
}
