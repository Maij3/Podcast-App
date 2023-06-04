import React from "react";
import ReactDOM from "react-dom/client";
import { PodcastApp } from "./PodcastApp";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./styles.css";
import { store } from "./store/store";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PodcastApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
