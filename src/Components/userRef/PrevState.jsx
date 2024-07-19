import React, { useState } from 'react'

const PrevState = () => {
    
const [counter, setCounter] =useState(0)

function countFive(){
   for(let i=0;i<5;i++){
       setCounter((pre)=>pre+1)
   }
}

  return (
    <div style={{height:"q",display:"flex",alignItems:"center",justifyContent:"center"}}>PrevState
    <h1>{counter}</h1>
    <button onClick={()=>setCounter(set=>set+1)}>+</button>
    <button onClick={()=>setCounter(set=>set-1)}>-</button>
    <button onClick={countFive}>ingrement with 5</button>     
    </div>
  )
}

export default PrevState