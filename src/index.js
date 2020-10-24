import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/rootReducer';
import App from "./App";

const store = createStore(rootReducer(), compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById("root")
);
