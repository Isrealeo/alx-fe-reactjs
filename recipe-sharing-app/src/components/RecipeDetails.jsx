import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === recipeId)
  );

  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  if (!recipe) return <p>Recipe not found</p>;

  const isFavorite = favorites.includes(recipe.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <div className="p-4 border rounded shadow-md">
      <h1 className="text-2xl font-bold mb-2">{recipe.title}</h1>
      <p className="mb-4">{recipe.description}</p>

      {/* Ingredients */}
      {recipe.ingredients && (
        <p className="text-gray-700 mb-2">
          <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
        </p>
      )}

      {/* Time */}
      {recipe.time && (
        <p className="text-gray-700 mb-4">
          <strong>Time:</strong> {recipe.time}
        </p>
      )}

      {/* ⭐ Favorite Button */}
      <button
        onClick={toggleFavorite}
        className={`px-4 py-2 rounded mb-4 ${
          isFavorite ? "bg-yellow-400" : "bg-gray-300"
        }`}
      >
        {isFavorite ? "★ Remove Favorite" : "☆ Add to Favorites"}
      </button>

      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
