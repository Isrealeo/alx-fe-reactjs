import { useState, useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ ...recipe, title, description });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mb-4">
      <input
        className="border p-2 mb-2 rounded"
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        className="border p-2 mb-2 rounded"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600" type="submit">
        Save
      </button>
    </form>
  );
};

export default EditRecipeForm;
