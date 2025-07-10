import React from 'react'

const DynamicButton = ({label,isDisabled = false,onClick}) => {

    const buttonStyle = {
        padding: "10px 16px",
        backgroundColor: isDisabled ? "#ccc" : "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: isDisabled ? "not-allowed" : "pointer",
        opacity: isDisabled ? 0.6 : 1,
        fontSize: "16px",
      };

  return (

    <div>
        <button style={buttonStyle} disabled = {isDisabled} onClick={onClick}> {label} </button>
    </div>
  )
}

export default DynamicButton