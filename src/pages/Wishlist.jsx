import RecipeCard from "../components/RecipeCard";

function Wishlist({
  favorites,
  toggleFavorite,
  setSelectedRecipe,
}) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-8">
        Wishlist ❤️
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {favorites.length === 0 ? (
          <h2>
            No favorite recipes yet
          </h2>
        ) : (
          favorites.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              favorites={favorites}
              toggleFavorite={
                toggleFavorite
              }
              setSelectedRecipe={
                setSelectedRecipe
              }
            />
          ))
        )}

      </div>

    </section>
  );
}

export default Wishlist;