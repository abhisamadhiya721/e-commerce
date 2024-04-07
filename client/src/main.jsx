import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import {app} from './firebase.config.js'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider app={app} store={store}>
    <PersistGate loading={"loading"} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
