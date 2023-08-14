import React, { useState } from 'react';

function MealFinder() {
  const [searchInput, setSearchInput] = useState('');
  const [mealList, setMealList] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleSearchInputChange = event => {
    setSearchInput(event.target.value);
  };

  const handleSearchClick = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`);
      const data = await response.json();
      if (data.meals) {
        setMealList(data.meals);
      } else {
        setMealList([]);
      }
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };

  const handleRecipeClick = async (mealId) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      const data = await response.json();
      setSelectedMeal(data.meals[0]);
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
  };

  const handleCloseRecipe = () => {
    setSelectedMeal(null);
  };

  return (
    <div className="container">
      <div className="meal-wrapper">
        <div className="meal-search">
          <h2 className="title">Find Meals For Your Ingredients</h2>
          <blockquote>
            Real food doesn't have ingredients, real food is ingredients.<br />
            <cite>- Jamie Oliver</cite>
          </blockquote>
          <div className="meal-search-box">
            <input
              type="text"
              className="search-control"
              placeholder="Enter an ingredient"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
            <button
              type="button"
              className="search-btn btn"
              onClick={handleSearchClick}
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        <div className="meal-result">
          <h2 className="title">Your Search Results:</h2>
          <div id="meal">
            {mealList.map(meal => (
              <div key={meal.idMeal} className="meal-item" data-id={meal.idMeal}>
                <div className="meal-img">
                  <img src={meal.strMealThumb} alt="food" />
                </div>
                <div className="meal-name">
                  <h3>{meal.strMeal}</h3>
                  <button
                    type="button"
                    className="recipe-btn"
                    onClick={() => handleRecipeClick(meal.idMeal)}
                  >
                    Get Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedMeal && (
          <div className="meal-details">
            <button
              type="button"
              className="btn recipe-close-btn"
              onClick={handleCloseRecipe}
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="meal-details-content">
              <h2 className="recipe-title">{selectedMeal.strMeal}</h2>
              <p className="recipe-category">{selectedMeal.strCategory}</p>
              <div className="recipe-instruct">
                <h3>Instructions:</h3>
                <p>{selectedMeal.strInstructions}</p>
              </div>
              <div className="recipe-meal-img">
                <img src={selectedMeal.strMealThumb} alt="" />
              </div>
              {selectedMeal.strYoutube && (
                <div className="recipe-link">
                  <a href={selectedMeal.strYoutube} target="_blank" rel="noopener noreferrer">
                    Watch Video
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MealFinder;
