import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { test, expect } from "vitest";

import App from "./App";
import { FavoritesProvider } from "./context/FavoritesContext";

test("renders navbar", () => {
  render(
    <FavoritesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoritesProvider>
  );

  expect(document.body).toBeInTheDocument();
});