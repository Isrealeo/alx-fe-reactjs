import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  return (
    <button
      onClick={() => deleteRecipe(recipeId)}
      className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
    >
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
