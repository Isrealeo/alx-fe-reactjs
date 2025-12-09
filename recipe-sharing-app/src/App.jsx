import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetailsWrapper from './components/RecipeDetailsWrapper';
import SearchBar from './components/SearchBar';
import RecommendationList from './components/RecommendationList';

const App = () => {
  return (
    <Router>
      <div className="max-w-xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={
            <>
              <AddRecipeForm />
              <SearchBar />
              <RecipeList />
              <RecommendationList />
            </>
          } />
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
