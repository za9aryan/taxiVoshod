import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import App from './App';

import './index.css';
import ChangeUrlProvider from './ChangeUrlProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>

    <Provider store={store}>
        <BrowserRouter>
            <ChangeUrlProvider>
                <App />
            </ChangeUrlProvider>
        </BrowserRouter>
    </Provider>
    // </React.StrictMode>
);
