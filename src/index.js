import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import './index.scss'
import '../src/assets/scss/style.scss'

import App from "./components/App";
import reducers from "./reducers";
import store from "./redux/store";

// const store = createStore(
//   reducers,
//   applyMiddleware(ReduxThunk)
// );

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
