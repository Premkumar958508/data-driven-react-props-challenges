import React from 'react'

const ListFeature = ({list}) => {
  return (
    <>
    <div className='change'>
        <ul>
            {list.map((items,index) => 
                <li key={index}>{items}</li>
            )}
        </ul>

    </div>
    </>
  )
}

export default ListFeature