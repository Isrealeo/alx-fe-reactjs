import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Recommended for You</h2>

      {recommendations.length === 0 && <p>No recommendations yet.</p>}

      {recommendations.map(r => (
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

export default RecommendationsList;
