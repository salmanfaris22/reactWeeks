import React, { useState } from 'react'

const Events = () => {

function changeValue(){
    setText(document.getElementById('text').value)
}

const [text,setText] = useState()



  return (
    <div style={{height:"100vh"}}>
        <input type="text" id="text" onChange={changeValue} />
        <h1>{text}</h1>
    </div>
  )
}

export default Events