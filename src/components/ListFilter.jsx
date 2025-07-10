import React from 'react'

const ListFilter = ({items,filterCatagory,children}) => {
    const filterItems = filterCatagory ? items.filter(item => item.category === filterCatagory) : items;
    
  return (
    <>
        <div>{children}</div>
      <ul>
        {filterItems.map((item) => 
        <li key = {item.id}>{item.name} {item.catagory}</li>)}
      </ul>
    </>
    
  )
}

export default ListFilter
