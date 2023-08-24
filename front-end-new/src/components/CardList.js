import React from 'react'
import "./cardList.css"

function CardList({recipyList}) {
  return (
    <div className='flexbox'>
      {recipyList &&
        recipyList.map((recipy) => (
          <div className='card'>
            <h3>{recipy.name}</h3>
            <hr/>
            <div className='flex'>
              <img></img>
              <div className='list'>
                {recipy.ingredientList &&
                  recipy.ingredientList.map((ingredient) => (
                    <p>{ingredient}</p>
                  ))
                }
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default CardList;