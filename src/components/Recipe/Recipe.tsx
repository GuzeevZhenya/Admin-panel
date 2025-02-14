// import { useState } from "react";
// import RecipeList from "./RecipeList";
// import RecipeDetails from "./RecipeDetails";
import { useGetRandomRecipesQuery } from "features/Api/TheorySlice";

import RandomMeal from "./RandomRecipe";

const RecipeApp = () => {
  //   const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  //   const handleRecipeSelect = (id) => {
  //     setSelectedRecipeId(id);
  //   };

  const { data: recipes, isLoading, refetch } = useGetRandomRecipesQuery({});

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <button onClick={refetch}>Обновить рецепт</button>{" "}
      {!isLoading && recipes && <RandomMeal meal={recipes} />}
      {/* <div style={{ flex: 1 }}>
        <RecipeList onRecipeSelect={handleRecipeSelect} />
      </div>
      <div style={{ flex: 2 }}>
        {selectedRecipeId ? (
          <RecipeDetails recipeId={selectedRecipeId} />
        ) : (
          <div>Выберите рецепт из списка</div>
        )}
      </div> */}
    </div>
  );
};

export default RecipeApp;
