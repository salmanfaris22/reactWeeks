
import React, { useState } from 'react'
import './hero.css'


const Hero = () => {

  const [name, setName] = useState("jhone");
  function newName() {
    setName("shilly")
  }


  const [age, setAge] = useState(1)
  function ageNow() {
    setAge(age + 1)
  }


  function resetAll() {
    setAge(0)
    setName("jhone")
  }

 const [employ , setEmploy] = useState(false)

 function employeCheck(){
    setEmploy(!employ)
 }

  return (
    <div className='hero-main'>
      <div>
        <h1>{name}</h1>
        <button onClick={newName}>Name</button>
      </div>
      <div>
        <h1>{age}</h1>
        <button onClick={ageNow}>Age</button>
      </div>
   <div>
      <h1>{employ ?  "yes":"no"}</h1>
      <button onClick={employeCheck}>is Toggle</button>
   </div>
      <div>
        <button onClick={resetAll}>Reset</button>
      </div>
    </div>
  )
}

export default Hero