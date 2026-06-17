import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RecipeModal from "./components/RecipeModal";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import Wishlist from "./pages/Wishlist";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AddRecipe from "./pages/AddRecipe";
import recipes from "./data/recipes";

import { useFavorites } from "./context/FavoritesContext";

function App() {
  const { favorites, toggleFavorite } = useFavorites();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white min-h-screen flex flex-col"
          : "bg-orange-50 min-h-screen flex flex-col"
      }
    >
      <Navbar
        favoritesCount={favorites.length}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/recipes"
            element={
              <Recipes
                recipes={recipes}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setSelectedRecipe={setSelectedRecipe}
              />
            }
          />

          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />

          <Route
            path="/wishlist"
            element={
              <Wishlist
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                setSelectedRecipe={setSelectedRecipe}
              />
            }
          />

          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          closeModal={() => setSelectedRecipe(null)}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;