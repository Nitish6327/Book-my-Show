import React from 'react'
import '../Css/radiocomponents.css'

const Radiocomponents = ({ text, changeSelection, data }) => {

  const handleChecked = (val) => {
    if (typeof changeSelection === "function") {
      changeSelection(val)
    } else {
      console.error("changeSelection is not a function");
    }
  }

  return (
    <div
      className={`form-check-label ${data === text ? "active" : ""}`}
      onClick={() => handleChecked(text)}
    >
      {text}
    </div>
  )
}

export default Radiocomponents;