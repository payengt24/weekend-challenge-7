import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//For redux store
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//------Reducer---------

//goes to Comment component
const comment = (state = '', action) => {
    if(action.type === 'SET_COMMENT') {
        return action.payload;
    }else if (action.type === 'reset_survey') {
        return state = ''
    }
    return state;
}

const feeling = (state = 0, action) => {
    if(action.type === 'SET_FEELING') {
        return action.payload;
    }else if (action.type === 'reset_survey') {
        return state = 0
    } 
    return state;
}

const supported = (state = 0, action) => {
    if(action.type === 'SET_SUPPORTED') {
        return action.payload;
    } else if (action.type === 'reset_survey') {
        return state = 0
    }
    return state;
}

const understanding = (state = 0, action) => {
    if(action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    } else if (action.type === 'reset_survey') {
        return state = 0
    }
    return state;
}

//store
const storeInstance = createStore(
    combineReducers({
        comment,
        feeling,
        supported,
        understanding,

    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();