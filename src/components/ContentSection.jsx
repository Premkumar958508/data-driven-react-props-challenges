import React from 'react'

const ContentSection = ({title,children}) => {
  return (
    <div>
        <h3>{title}</h3>
        <div>{children}</div>
    </div>
  )
}

export default ContentSection