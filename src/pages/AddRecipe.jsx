import { useState } from "react";

function AddRecipe() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Recipe Submitted!");

    setTitle("");
    setCategory("");
    setTime("");
  };

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">
        Share Your Recipe
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="Recipe Name"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          placeholder="Cooking Time"
          value={time}
          onChange={(e) =>
            setTime(e.target.value)
          }
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-3 rounded"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipe;