function RecipeModal({
  recipe,
  closeModal,
}) {
  return (
    <div
      className="
      fixed
      inset-0
      bg-black/60
      backdrop-blur-sm
      flex
      items-center
      justify-center
      p-4
      z-50
      "
    >
      <div
  className="
  bg-white
  rounded-3xl
  max-w-2xl
  w-full
  max-h-[90vh]
  overflow-y-auto
  shadow-2xl
  modal-animation
  "
>
        {/* Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="
          w-full
          h-72
          object-cover
          "
        />

        <div className="p-6">

          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
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

              <h2
                className="
                text-3xl
                font-bold
                mt-4
                text-gray-800
                "
              >
                {recipe.title}
              </h2>

              <p className="text-gray-500 mt-2">
                ⏱ {recipe.time}
              </p>
            </div>

            <button
              onClick={closeModal}
              className="
              text-2xl
              font-bold
              text-gray-500
              hover:text-red-500
              "
            >
              ✕
            </button>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h3 className="text-xl font-bold">
              Description
            </h3>

            <p className="text-gray-600 mt-2">
              {recipe.description}
            </p>
          </div>

          {/* Ingredients */}
          <div className="mt-6">
            <h3 className="text-xl font-bold">
              Ingredients
            </h3>

            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-600">
              {recipe.ingredients.map(
                (ingredient, index) => (
                  <li key={index}>
                    {ingredient}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Instructions */}
          <div className="mt-6">
            <h3 className="text-xl font-bold">
              Instructions
            </h3>

            <ol className="list-decimal pl-5 mt-3 space-y-3 text-gray-600">
              {recipe.instructions.map(
                (step, index) => (
                  <li key={index}>
                    {step}
                  </li>
                )
              )}
            </ol>
          </div>

          {/* Close Button */}
          <button
            onClick={closeModal}
            className="
            mt-8
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
            "
          >
            Close Recipe
          </button>

        </div>
      </div>
    </div>
  );
}

export default RecipeModal;