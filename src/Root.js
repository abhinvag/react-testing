import React from 'react'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducers from "./reducers/index"
import reduxPromise from 'redux-promise';

function Root({children, initialState={}}){

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    
    const store = createStore(
        rootReducers,
        initialState,
        composeEnhancers(
            applyMiddleware(reduxPromise)    
        )
    );

    return(
        <Provider store={store}>
            {children}
        </Provider>
    );
}

export default Root;