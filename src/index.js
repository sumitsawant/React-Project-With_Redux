import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';
import SubmitComponent from './SubmitComponent';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from "redux"
import { Provider, } from "react-redux";
import reducer from './reducers';

const store = createStore(reducer);
//store.dispatch({type:""})
const App = () => ( < Provider store = { store } >

    <
    SubmitComponent / >
    <
    /Provider>
);

ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();