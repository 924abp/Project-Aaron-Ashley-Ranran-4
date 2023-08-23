import React from 'react';


function RecipeCard({
}) {
  return (
    <div className='card'>
      <h3>name</h3>
      <hr/>
      <div className='flex'>
        <img></img>
        <div className='list'>
          <p>ingredient</p>
          <p>ingredient</p>
          <p>ingredient</p>
          <p>ingredient</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
