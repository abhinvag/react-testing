import React from 'react'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducers from "./reducers/index"

function Root({children, initialState={}}){
    
    const store = createStore(
        rootReducers,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    );

    return(
        <Provider store={store}>
            {children}
        </Provider>
    );
}

export default Root;