import React from 'react'

const ListingItem = ({product}) => {
    const {name,price,inStock } = product 
  return (
    <>
    <div className='change'>
    <h3>{name}</h3>
    <p>${price}</p>
    {inStock ? <p>In stock</p> : <p>Out of stock</p>}
    </div>
    </>
  )
}

export default ListingItem
