import React, { useState } from 'react'

const ColorInput = () => {

    const [colors,setColors]=useState("")

    function getColor(){
        setColors(document.getElementById('col').value)
        document.getElementById('col').value = ""
    }
  return (
    <div style={{height:"100vh",background:colors,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",}}>
        <h1>Type Your Color </h1>
   <div>
   <input  type="text" id='col'/>
   <button onClick={getColor}>Submit</button>
   
   </div>
    </div>
  )
}

export default ColorInput