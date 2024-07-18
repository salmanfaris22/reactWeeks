import React, { useEffect, useRef, useState } from 'react'

const Textin = () => {

    const [value, setValue] =useState("")
    const [inputvalue,setInputvalue] =useState('')

   
 function handechanje(event){
    setInputvalue(event.target.value)
 }   
function chanjeColor(){
setValue(inputvalue)
}

  return (
    <div style={{background:value,height:"100vh"} }>
   <button onClick={chanjeColor}>darkmood</button>
   <input type="text" id="dd" onChange={handechanje} />
    </div>
  )
}

export default Textin