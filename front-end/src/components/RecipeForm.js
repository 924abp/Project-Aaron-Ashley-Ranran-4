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
      <form>
        <label for="name">Name</label>
        <input type="text" id="name" onChange={handleImageUpload}></input>

        <input type="file" accept="image/*" onChange={handleImageUpload} />

        <label for="ingredients">Ingredients</label>
        <input type="text" id="ingredients" onChange={handleImageUpload}></input>

        <label for="instructions">Instructions</label>
        <input type="text" id="instructions" onChange={handleImageUpload}></input>
      </form>
      <button onClick={createRecipe}>Create Recipe</button>
    </div>
  );
}

export default RecipeForm;
