import React from "react";
import ReactDOM from "react-dom/client";
import { PodcastApp } from "./PodcastApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <PodcastApp />
    </BrowserRouter>
  </React.StrictMode>
);
