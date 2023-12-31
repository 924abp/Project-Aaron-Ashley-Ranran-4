import React from 'react'
import { useState, useEffect } from 'react';
import AuthorInformation from '../../components/AuthorInformation';
import AuthorForm from '../../components/AuthorForm';
import RecipeForm from '../../components/RecipeForm';

export default function AddRecipe() {
  const [author, setAuthor] = useState({});
  const [newAuthor, setNewAuthor] = useState({
    username: '',
    password: '',
    name: '',
  });
  const [recipeImage, setRecipeImage] = useState(null);
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    ingredients: [],
  });

  const handleInputChange = (event) => {
      const { name, value } = event.target;
      setNewAuthor((prevAuthor) => ({ ...prevAuthor, [name]: value }));
    };
  
    const createAuthor = async () => {
      try {
        
      } catch (error) {
        console.error('Error creating author:', error);
      }
    };
  
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      setRecipeImage(file);
    };
  
    const handleTitleChange = (event) => {
      const { value } = event.target;
      setNewRecipe((prevRecipe) => ({ ...prevRecipe, title: value }));
    };
  
    const handleIngredientChange = (index, value) => {
      const updatedIngredients = [...newRecipe.ingredients];
      updatedIngredients[index] = value;
      setNewRecipe((prevRecipe) => ({ ...prevRecipe, ingredients: updatedIngredients }));
    };
  
    const createRecipe = async () => {
      try {
        
      } catch (error) {
        console.error('Error creating recipe:', error);
      }
    };

  return (
    <div className="Recipe">
      <h1>Add Recipe</h1>
      <AuthorInformation author={author} />
      {/* <AuthorForm                          an Author is a user so they would be created on the register page.
        newAuthor={newAuthor}
        handleInputChange={handleInputChange}
        createAuthor={createAuthor}
      /> */} 
      <RecipeForm
        image={recipeImage}
        newRecipe={newRecipe}
        handleImageUpload={handleImageUpload}
        handleTitleChange={handleTitleChange}
        handleIngredientChange={handleIngredientChange}
        createRecipe={createRecipe}
      />
    </div>
  )
}