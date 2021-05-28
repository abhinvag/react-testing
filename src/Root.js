import React from 'react'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducers from "./reducers/index"

function Root(props){
    
    const store = createStore(
        rootReducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    );

    return(
        <Provider store={store}>
            {props.children}
        </Provider>
    );
}

export default Root;