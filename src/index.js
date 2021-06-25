import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from './components/store/AppContextProvider';
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// reportWebVitals();
