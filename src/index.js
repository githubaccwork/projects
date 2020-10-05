import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';

let rerenderEntireTree = (state) => {

    ReactDOM.render(<BrowserRouter>
                        <App state={state} dispatch={store.dispatch.bind(store)} store={store} /> 
                    </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

serviceWorker.unregister();
