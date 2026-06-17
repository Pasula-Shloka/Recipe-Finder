import { NavLink } from "react-router-dom";

function Navbar({
  favoritesCount,
  darkMode,
  setDarkMode,
}) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-orange-500">
          Recipe Explorer
        </h1>

        <nav className="flex items-center gap-6 font-medium">

          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/recipes">
            Recipes
          </NavLink>

          <NavLink to="/add-recipe">
            Add Recipe
          </NavLink>

          <NavLink to="/wishlist">
            Wishlist
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>

        </nav>

        <div className="flex items-center gap-4">
          <span className="font-semibold">
            ❤️ {favoritesCount}
          </span>

          <button
            onClick={() =>
              setDarkMode(!darkMode)
            }
            className="text-xl"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;