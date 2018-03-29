import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import MyComponent from './MyComponent';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from "redux"
import {Provider} from "react-redux";


const initailState ={
   
    error: null,
    isLoaded: false,
    editing: false,
    edit: false,
    items: []
    
};

function reducer(state = initailState, action){

    switch(action.type){

        case "handleEdit":
        return{
                  edit: !this.state.edit
        };
        default:
        return state;    
    }
    
}

const store =createStore(reducer);

//store.dispatch({type:""})
const App =() =>(
<Provider store ={store}>
<MyComponent/>
</Provider>
);

 ReactDOM.render(<App/>, document.getElementById('root')); 

registerServiceWorker();

