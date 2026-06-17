import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const toggleFavorite = (recipe) => {
    const exists = favorites.find(
      (item) => item.id === recipe.id
    );

    if (exists) {
      setFavorites(
        favorites.filter(
          (item) => item.id !== recipe.id
        )
      );
    } else {
      setFavorites([...favorites, recipe]);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () =>
  useContext(FavoritesContext);