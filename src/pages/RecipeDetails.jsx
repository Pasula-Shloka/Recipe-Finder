import { useParams } from "react-router-dom";
import recipes from "../data/recipes";

function RecipeDetails() {

  const { id } = useParams();

  const recipe = recipes.find(
    item => item.id === Number(id)
  );

  if (!recipe) {
    return <h1>Recipe Not Found</h1>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
<div className="flex justify-center">
  <img
    src={recipe.image}
    alt={recipe.title}
    className="
      w-full
      max-w-md
      h-64
      object-cover
      rounded-2xl
      shadow-lg
    "
  />
</div>
     
      <h1 className="text-5xl font-bold mt-6">
        {recipe.title}
      </h1>

      <p className="mt-4 text-gray-600">
        {recipe.description}
      </p>

      <h2 className="text-2xl font-bold mt-8">
        Ingredients
      </h2>

      <ul className="list-disc pl-6 mt-3">
        {recipe.ingredients.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mt-8">
        Instructions
      </h2>

      <ol className="list-decimal pl-6 mt-3">
        {recipe.instructions.map((step,index)=>(
          <li key={index}>{step}</li>
        ))}
      </ol>

    </div>
  );
}

export default RecipeDetails;