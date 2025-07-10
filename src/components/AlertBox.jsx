import React from 'react'

const AlertBox = ({message,type}) => {

    const baseStyle = {
        padding: "12px 20px",
        borderRadius: "5px",
        color: "white",
        margin: "10px 0",
        fontWeight: "bold",
      };
      const typeColors = {
        success: "green",
        warning: "orange",
        error: "red",
      };
      const style = {
        ...baseStyle
        ,backgroundColor : typeColors[type] || "gray"
      }
    
  return (
    <div style = {style}>{message}</div>
  )
}

export default AlertBox