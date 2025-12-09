import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const setIngredientsFilter = useRecipeStore(state => state.setIngredientsFilter);
  const setTimeFilter = useRecipeStore(state => state.setTimeFilter);

  return (
    <div className="flex flex-col md:flex-row gap-2 mb-4">
      <input
        type="text"
        placeholder="Search by title..."
        className="border p-2 rounded flex-1"
        onChange={e => setSearchTerm(e.target.value)}
      />
      <input
        type="text"
        placeholder="Filter by ingredient..."
        className="border p-2 rounded flex-1"
        onChange={e => setIngredientsFilter(e.target.value)}
      />
      <input
        type="text"
        placeholder="Filter by time..."
        className="border p-2 rounded flex-1"
        onChange={e => setTimeFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
