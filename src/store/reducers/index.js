import {combineReducers} from "redux";
import contactsReducer from "./contactsReducer";
import authReducer from "./authReducer";
import messagesReducer from "./messagesReducer";

export default combineReducers({
    auth: authReducer,
    contacts: contactsReducer,
    messages: messagesReducer,
});
