import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import RecipeCard from "../components/RecipeCard";

function Recipes({
  recipes,
  favorites,
  toggleFavorite,
  selectedCategory,
  setSelectedCategory,
  searchTerm,
  setSearchTerm,
  setSelectedRecipe,
}) {
  const categories = [
    "All",
    ...new Set(
      recipes.map((r) => r.category)
    ),
  ];

  const filteredRecipes =
    recipes.filter((recipe) => {
      const search =
        recipe.title
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      const category =
        selectedCategory === "All" ||
        recipe.category ===
          selectedCategory;

      return search && category;
    });

  return (
    <>
    <div className="flex justify-center mt-8"> 

  <SearchBar
    searchTerm={searchTerm}
    setSearchTerm={setSearchTerm}
  />
</div>
      
<br></br>
      <CategoryFilter
        categories={categories}
        selectedCategory={
          selectedCategory
        }
        setSelectedCategory={
          setSelectedCategory
        }
      />

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredRecipes.map(
            (recipe) => (
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
            )
          )}

        </div>
      </section>
    </>
  );
}

export default Recipes;