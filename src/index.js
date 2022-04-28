import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import ReactDOM from "react-dom";
import App from "./App";

let rerenderEntireDOM = (state) => {
    ReactDOM.render(
        <App state={store.getState()}
             dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
};

rerenderEntireDOM(store.getState());

store.subscribe(rerenderEntireDOM);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

