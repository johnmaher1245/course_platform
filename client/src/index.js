//get our base stylesheet
// import 'materialize-css/dist/css/materialize.min.css';
// import './assets/css/style.css';
// import './assets/js/script.js';
import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import './assets/index.css';
import { createBrowserHistory } from 'history'

import App from './App';
import reducers from './reducers';

// import {CookiesProvider} from "react-cookie";
import AppProvider from './sections/course/context/index';



export const history = createBrowserHistory()


//holds reducers
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

//1st argument is root component, 2nd is where we want render component to inside of DOM
//provider is react component that can read state changes
ReactDom.render( 
    <AppProvider store={store}>
            <App />
    </AppProvider>, 
    document.querySelector('#root')
);
