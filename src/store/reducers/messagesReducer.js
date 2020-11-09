import moment from "moment";
const date = new Date()
const initialState = {
    messagesHistory: {
        '1': [{contactId: '1', value: 'Hello', date: moment(date).subtract('1', 'hour').valueOf(), author: '1'},
            {contactId: '1', value: 'Hi', date: moment(date).subtract('20', 'minutes').valueOf(), author: '1111'},
            {
                contactId: '1',
                value: 'How are you?',
                date: moment(date).subtract('10', 'minutes').valueOf(),
                author: '1'
            }],
        '3': [{
            contactId: '3',
            value: 'Hi, there',
            date: moment(date).subtract('1', 'hour').valueOf(),
            author: '3'
        },
            {contactId: '3', value: 'Yo', date: moment(date).subtract('20', 'minutes').valueOf(), author: '1111'},
            {
                contactId: '3',
                value: 'What are you doing?',
                date: moment(date).subtract('5', 'minutes').valueOf(),
                author: '3'
            }],
    },
    newMessages: [],
};

export default function (state = initialState, action) {
    let messagesHistory = {};
    switch (action.type) {
        case 'SEND_MESSAGE':
            messagesHistory = Object.assign({}, state.messagesHistory);
            action.payload.activeContact.id in messagesHistory ?
                messagesHistory[action.payload.activeContact.id].push(action.payload.message) :
                messagesHistory[action.payload.activeContact.id] = [action.payload.message];
            return {
                ...state,
                messagesHistory,
            };
        case 'GET_ANSWER':
            messagesHistory = Object.assign({}, state.messagesHistory);
            const message = {
                id: action.payload.messageId,
                value: action.payload.messageValue,
                date: Date.now(),
                contactId: action.payload.contactId,
            }
            messagesHistory[message.contactId].push(message);
            const newMessages = [...state.newMessages];
            newMessages.push(message);
            return {
                messagesHistory,
                newMessages,
            };
        case 'CLEAR_NEW-MESSAGE':
            const messageIdx = state.newMessages.findIndex(message => message.id === action.payload)
            return {
                ...state,
                newMessages: [
                    ...state.newMessages.slice(0, messageIdx),
                    ...state.newMessages.slice(messageIdx + 1),
                ],
            }
        default:
            return state;
    }
}
