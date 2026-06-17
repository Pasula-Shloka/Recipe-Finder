import { Link } from "react-router-dom";

function RecipeCard({
  recipe,
  favorites,
  toggleFavorite,
}) {
  const isFavorite = favorites.some(
    (item) => item.id === recipe.id
  );

  return (
    <div
      className="
      bg-white
      rounded-3xl
      overflow-hidden
      shadow-lg
      hover:shadow-2xl
      hover:-translate-y-3
      hover:scale-[1.02]
      transition-all
      duration-300
      relative
      "
    >
      {/* Favorite Button */}
      <button
        onClick={() => toggleFavorite(recipe)}
        className="
        absolute
        top-4
        right-4
        z-10
        bg-white
        w-10
        h-10
        rounded-full
        shadow-md
        flex
        items-center
        justify-center
        hover:scale-110
        transition
        "
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>

      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="
        w-full
        h-56
        object-cover
        "
      />

      {/* Content */}
      <div className="p-5">

        <div className="flex justify-between items-center">
          <span
            className="
            bg-orange-100
            text-orange-600
            px-3
            py-1
            rounded-full
            text-sm
            font-semibold
            "
          >
            {recipe.category}
          </span>

          <span className="text-gray-500 text-sm">
            ⏱ {recipe.time}
          </span>
        </div>

        <h2
          className="
          text-2xl
          font-bold
          mt-4
          text-gray-800
          "
        >
          {recipe.title}
        </h2>

        <p
          className="
          text-gray-500
          mt-3
          text-sm
          leading-relaxed
          "
        >
          {recipe.description}
        </p>

        <Link
          to={`/recipe/${recipe.id}`}
          className="
          mt-6
          w-full
          bg-gradient-to-r
          from-orange-500
          to-red-500
          text-white
          py-3
          rounded-xl
          font-semibold
          hover:scale-105
          transition
          shadow-md
          block
          text-center
          "
        >
          View Recipe
        </Link>

      </div>
    </div>
  );
}

export default RecipeCard;