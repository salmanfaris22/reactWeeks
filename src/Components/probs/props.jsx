import React from 'react'
import './props.css'

 
const Props = ({person}) => {
  return (
    <div className='props-main'>
        {person.map((item)=>{
               return(
                <div key={item.id} className='box'>
                    <h1>{item.name}</h1>
                    <h3>{item.age}</h3>
                    <h3>{item.isStudnet ? "yes":"no"}</h3>
                </div>
               )
        })}
        
    </div>
    
  )
}

export default Props