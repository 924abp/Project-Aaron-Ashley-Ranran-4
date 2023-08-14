// RecipeForm.js
import React from 'react';


function RecipeForm({
  image,
  newRecipe,
  handleImageUpload,
  handleTitleChange,
  handleIngredientChange,
  createRecipe,
}) {
  return (
    <div>
      <h2>Create New Recipe:</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {/* Other recipe fields */}
      <button onClick={createRecipe}>Create Recipe</button>
    </div>
  );
}

export default RecipeForm;
