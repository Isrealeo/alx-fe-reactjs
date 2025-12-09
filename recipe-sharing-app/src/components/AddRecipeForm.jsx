import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({
      id: Date.now(),
      title,
      description,
      ingredients: ingredients.split(',').map(i => i.trim()),
      time
    });
    setTitle('');
    setDescription('');
    setIngredients('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-6">
      <input
        className="border p-2 rounded"
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        className="border p-2 rounded"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <input
        className="border p-2 rounded"
        placeholder="Ingredients (comma separated)"
        value={ingredients}
        onChange={e => setIngredients(e.target.value)}
      />
      <input
        className="border p-2 rounded"
        placeholder="Preparation time"
        value={time}
        onChange={e => setTime(e.target.value)}
      />
      <button className="bg-green-500 text-white py-2 rounded hover:bg-green-600" type="submit">
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
