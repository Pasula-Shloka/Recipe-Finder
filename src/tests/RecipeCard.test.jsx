import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { test, expect, vi } from "vitest";
import RecipeCard from "../components/RecipeCard";

const recipe = {
  id: 1,
  title: "Pizza",
  description: "Delicious pizza",
  category: "Dinner",
  time: "30 min",
  image: "pizza.jpg",
};

test("renders recipe title", () => {
  render(
    <BrowserRouter>
      <RecipeCard
        recipe={recipe}
        favorites={[]}
        toggleFavorite={vi.fn()}
      />
    </BrowserRouter>
  );

  expect(
    screen.getByText("Pizza")
  ).toBeInTheDocument();
});