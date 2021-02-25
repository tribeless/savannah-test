import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {ApolloProvider} from "@apollo/client";
import {Provider} from "react-redux";
import store from "./redux/store";
// import client from "./apollo/client";

ReactDOM.render(
  // <ApolloProvider client={client}>
    <Provider store={store}>
    <App />
    </Provider>
  // </ApolloProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
