import RecipeCard from "../components/RecipeCard";

function RecipeContainer({
  recipes,
  favorites,
  toggleFavorite,
  setSelectedRecipe,
}) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          setSelectedRecipe={setSelectedRecipe}
        />
      ))}

    </div>
  );
}

export default RecipeContainer;