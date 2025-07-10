import React from 'react'

const RecipeCard = ({recipe}) => {
    const { 
        name , ingredients , instructions
    } = recipe
  return (
    <>
    <h2>{name}</h2>
    <ul>
        {ingredients.map((items,index) => 
        <li key = {index}>{items}</li>)}
    </ul>
    <p><h3 className='change'>Instructions</h3>{instructions}</p>
    </>
  )
}

export default RecipeCard