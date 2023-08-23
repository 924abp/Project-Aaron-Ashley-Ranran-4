import React from 'react'
import "./card.css"
import RecipeCard from './RecipeCard'

function CardList({
}) {
  return (
    <div className='flexbox'>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
    </div>
  );
}

export default CardList;