function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-10">
      <div className="flex flex-wrap justify-center gap-4">

        {categories.map((category) => (
          <button
            key={category}
            onClick={() =>
              setSelectedCategory(category)
            }
            className={`
              px-6
              py-3
              rounded-full
              font-semibold
              transition-all
              duration-300
              shadow-md
              ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white scale-105"
                  : "bg-white text-gray-700 hover:scale-105 hover:shadow-xl"
              }
            `}
          >
            {category}
          </button>
        ))}

      </div>
    </section>
  );
}

export default CategoryFilter;