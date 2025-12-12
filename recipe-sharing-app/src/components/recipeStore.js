import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useRecipeStore = create(
  persist(
    (set, get) => ({

      // =========================
      //   DATA
      // =========================
      recipes: [],
      favorites: [],         // NEW
      recommendations: [],   // NEW

      // Filters / Search
      searchTerm: "",
      ingredientsFilter: "",
      timeFilter: "",

      // =========================
      //   RECIPE CRUD
      // =========================
      setRecipes:,
      addRecipe: (recipe) =>
        set((state) => ({
          recipes: [...state.recipes, recipe],
        })),

      deleteRecipe: (id) =>
        set((state) => ({
          recipes: state.recipes.filter((r) => r.id !== id),
          favorites: state.favorites.filter((fid) => fid !== id), // cleanup
        })),

      updateRecipe: (updated) =>
        set((state) => ({
          recipes: state.recipes.map((r) =>
            r.id === updated.id ? updated : r
          ),
        })),

      // =========================
      //   SEARCH & FILTERS
      // =========================
      setSearchTerm: (term) => set({ searchTerm: term }),
      setIngredientsFilter: (value) => set({ ingredientsFilter: value }),
      setTimeFilter: (value) => set({ timeFilter: value }),

      getfilteredRecipes: () => {
        const { recipes, searchTerm, ingredientsFilter, timeFilter } = get();

        return recipes.filter((r) => {
          const matchesTitle = r.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

          const matchesIngredient = ingredientsFilter
            ? r.ingredients?.some((ing) =>
                ing.toLowerCase().includes(ingredientsFilter.toLowerCase())
              )
            : true;

          const matchesTime = timeFilter ? r.time === timeFilter : true;

          return matchesTitle && matchesIngredient && matchesTime;
        });
      },

      // =========================
      //   FAVORITES
      // =========================
      addFavorite: (id) =>
        set((state) =>
          state.favorites.includes(id)
            ? state // avoid duplicates
            : { favorites: [...state.favorites, id] }
        ),

      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((fid) => fid !== id),
        })),

      // =========================
      //   RECOMMENDATIONS
      // =========================
      generateRecommendations: () => {
        const { recipes, favorites } = get();

        // Simple logic: recommend recipes similar to favorites
        const recommended = recipes.filter(
          (r) =>
            favorites.includes(r.id) && Math.random() > 0.4 // 40% chance
        );

        set({ recommendations: recommended });
      },
    }),

    {
      name: "recipe-storage", // localStorage key
    }
  )
);
