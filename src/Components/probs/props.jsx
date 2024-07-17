import React from 'react'
import './props.css'

 
const Props = (props) => {
  return (
    <div className='props-main'>
         <div className='box'>
             <h1>Name : {props.name}</h1>
             <h3>Age : {props.age}</h3>
             <h3>Students : {props.isStudnet ? "yes":"no"}</h3>
         </div>
    </div>
  )
}

export default Props