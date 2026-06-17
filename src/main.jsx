import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import { FavoritesProvider } from "./context/FavoritesContext";

import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <ErrorBoundary>
      <FavoritesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FavoritesProvider>
    </ErrorBoundary>
  </React.StrictMode>
);