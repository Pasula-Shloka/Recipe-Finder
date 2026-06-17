import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="py-12 px-6">

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-6xl font-bold text-orange-500">
          Recipe Explorer
        </h1>

        <p className="text-gray-600 mt-4 text-xl">
          Discover delicious recipes from around the world
        </p>
      </div>

      {/* Hero Image */}
      <div className="mt-10">
        <img
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200"
          alt="Food"
          className="
            w-full
            max-w-5xl
            mx-auto
            rounded-3xl
            shadow-xl
            hero-image
          "
        />
      </div>

      {/* Explore Section */}
      <div className="max-w-5xl mx-auto mt-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

          <h2 className="text-4xl font-bold text-gray-800">
            Find Your Next Favorite Recipe
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Browse Indian, Italian, Chinese and Dessert recipes,
            save your favorites and discover new dishes every day.
          </p>

          <Link
            to="/recipes"
            className="
              inline-block
              mt-8
              bg-gradient-to-r
              from-orange-500
              to-red-500
              text-white
              px-10
              py-4
              rounded-xl
              font-semibold
              text-lg
              shadow-lg
              hover:scale-105
              transition
            "
          >
            Browse Recipes 🍽️
          </Link>

        </div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
          <div className="text-5xl mb-3">🍕</div>

          <h3 className="text-xl font-bold">
            Delicious Recipes
          </h3>

          <p className="text-gray-600 mt-2">
            Explore recipes from different cuisines around the world.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
          <div className="text-5xl mb-3">❤️</div>

          <h3 className="text-xl font-bold">
            Save Favorites
          </h3>

          <p className="text-gray-600 mt-2">
            Add recipes to your wishlist and access them anytime.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
          <div className="text-5xl mb-3">🔍</div>

          <h3 className="text-xl font-bold">
            Smart Search
          </h3>

          <p className="text-gray-600 mt-2">
            Quickly find recipes using categories and search filters.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Hero;