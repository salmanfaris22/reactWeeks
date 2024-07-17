import React, { useState } from 'react'

const ColorInput = () => {

    const [colors,setColors]=useState("")

    function getColor(){
        setColors(document.getElementById('col').value)
        document.getElementById('col').value = ""
    }
  return (
    <div style={{height:"100vh",background:colors}}>
        <input  type="text" id='col'/>
        <button onClick={getColor}>Submit</button>
    </div>
  )
}

export default ColorInput