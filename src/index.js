import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { HashRouter } from 'react-router-dom';

import './index.css';
import App from './App.js';

import store from "./js/store/index";
import { addArticle } from "./js/actions/index";

window.store = store;
window.addArticle = addArticle;

ReactDOM.render((
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
), document.getElementById('root'));

