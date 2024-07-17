import React from 'react'
import './props.css'
import Props from './props'
const Proms = () => {
 
    const person = [
        {name : "salman",age:34, isStudnet:true},
        {name : "salman",age:34, isStudnet:true},
        {name : "salman",age:34, isStudnet:true},
        {name : "salman",age:34, isStudnet:true}
    ]

  return (
    <div className='pro-main'>
        
        <Props person={person}/>

    
    </div>
  )
}

export default Proms