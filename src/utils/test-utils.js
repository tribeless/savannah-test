import React from 'react';
import {render as rtlRender} from '@testing-library/react';
import {createStore,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import combinedReducers from '../redux';
import thunk from 'redux-thunk'

const middleware = [thunk];


    function render(
    ui,
    {
        initialState,
        store = createStore(combinedReducers, initialState,compose(applyMiddleware(...middleware))),
        ...renderOptions
    } = {}
    ) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
    }

    // re-export everything
    export * from '@testing-library/react'
    export * from  '@testing-library/user-event'
    // override render method
    export { render }