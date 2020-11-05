import React from 'react';
import './App.scss';
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import {Provider} from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {store, persistor} from "./store";
import Notification from "./components/Notification";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Sidebar/>
                    <Chat/>
                    <Notification/>
                </PersistGate>
            </Provider>
        </div>
    );
}

export default App;
