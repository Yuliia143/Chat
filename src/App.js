import React, {useState} from 'react';
import './App.scss';
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {store, persistor} from "./store";
import Notification from "./components/Notification";

const App = () => {
    const [isVisible, toggleIsVisible] = useState(false);
    return (
        <div className="App">
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Sidebar isVisible={isVisible} toggleIsVisible={toggleIsVisible}/>
                    <Chat isVisible={isVisible} toggleIsVisible={toggleIsVisible}/>
                    <Notification/>
                </PersistGate>
            </Provider>
        </div>
    );
}

export default App;
