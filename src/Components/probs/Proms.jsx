import React from 'react'
import './props.css'
import Props from './props'
const Proms = () => {
 
    const person = [
        {id:1,name : "salman",age:34, isStudnet:true},
        {id:2, name : "jasim",age:94, isStudnet:false},
        {id:3,name : "salman",age:34, isStudnet:true},
        {id:4,name : "salman",age:34, isStudnet:true}
    ]

  return (
    <div className='pro-main'>
        
        <Props person={person}/>

    
    </div>
  )
}

export default Proms