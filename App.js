import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './app/store'; //Import the store
import Router from './app/components/index' //Import the component file

const App=()=> {
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
}

export default App;