import React, { useState } from 'react'
import "./about.css"



const About = () => {
  
const [num, setNum] = useState(0)

const ingrement = ()=>{
  setNum(num+1)
}
const decrement = ()=>{
  setNum(num-1)
}
const reset = ()=>{
  setNum(0)
}

  return (
    <div className='about-main'>
      <div>{num}</div>
      <div>
        <button onClick={ingrement}>Ingrement</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default About