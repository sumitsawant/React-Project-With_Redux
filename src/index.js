import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers} from "redux"
import {Provider,} from "react-redux";

const store =createStore(reducer);
//store.dispatch({type:""})
const App =() =>(
<Provider store ={store}>
<MyComponent/>
</Provider>
);

ReactDOM.render(<App/>, document.getElementById('root')); 
registerServiceWorker();

