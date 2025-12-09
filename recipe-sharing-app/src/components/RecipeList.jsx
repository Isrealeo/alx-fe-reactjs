import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const ingredientsFilter = useRecipeStore(state => state.ingredientsFilter);
  const timeFilter = useRecipeStore(state => state.timeFilter);

  const getFilteredRecipes = useRecipeStore(state => state.getFilteredRecipes);

  // Favorites store actions
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  // Compute filtered recipes safely
  const listToDisplay = useMemo(() => {
    return getFilteredRecipes();
  }, [recipes, searchTerm, ingredientsFilter, timeFilter, getFilteredRecipes]);

  // Helper to check favorite status
  const isFav = (id) => favorites.includes(id);

  return (
    <div className="flex flex-col gap-2">
      {listToDisplay.length === 0 && <p>No recipes found.</p>}

      {listToDisplay.map(r => (
        <div
          key={r.id}
          className="p-4 border rounded hover:shadow-lg transition flex flex-col gap-2"
        >
          {/* Title links to details */}
          <Link to={`/recipe/${r.id}`}>
            <h2 className="font-bold text-lg">{r.title}</h2>
            <p className="text-gray-700 truncate">{r.description}</p>

            {r.ingredients && (
              <p className="text-gray-500 text-sm">
                Ingredients: {r.ingredients.join(', ')}
              </p>
            )}
            {r.time && <p className="text-gray-500 text-sm">Time: {r.time}</p>}
          </Link>

          {/* Favorite Button */}
          <button
            onClick={() =>
              isFav(r.id) ? removeFavorite(r.id) : addFavorite(r.id)
            }
            className={`px-3 py-1 rounded text-sm font-semibold border 
              ${isFav(r.id)
                ? "bg-red-500 text-white border-red-600"
                : "bg-gray-100 text-gray-700 border-gray-300"}
            `}
          >
            {isFav(r.id) ? "★ Remove Favorite" : "☆ Add Favorite"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
