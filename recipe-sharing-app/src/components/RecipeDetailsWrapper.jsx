import { useParams } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';

const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={Number(id)} />;
};

export default RecipeDetailsWrapper;
