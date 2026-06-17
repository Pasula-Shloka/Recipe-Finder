import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { test, expect } from "vitest";
import Recipes from "../pages/Recipes";

const recipes = [
  {
    id: 1,
    title: "Pizza",
    category: "Dinner",
    description: "Cheesy Pizza",
    image: "pizza.jpg",
    time: "30 min",
  },
];

test("renders recipes page", () => {
  const { container } = render(
    <BrowserRouter>
      <Recipes
        recipes={recipes}
        favorites={[]}
        toggleFavorite={() => {}}
        selectedCategory="All"
        setSelectedCategory={() => {}}
        searchTerm=""
        setSearchTerm={() => {}}
        setSelectedRecipe={() => {}}
      />
    </BrowserRouter>
  );

  expect(container).toBeTruthy();
});