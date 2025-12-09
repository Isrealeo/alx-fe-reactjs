import { useRecipeStore } from "../store/recipeStore";
import { Link } from "react-router-dom";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites
      .map((id) => state.recipes.find((r) => r.id === id))
      .filter(Boolean)
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">My Favorites</h2>

      {favorites.length === 0 && <p>No favorites yet.</p>}

      {favorites.map((r) => (
        <Link
          key={r.id}
          to={`/recipe/${r.id}`}
          className="block p-3 border rounded mb-2"
        >
          {r.title}
        </Link>
      ))}
    </div>
  );
};

export default FavoritesList;
