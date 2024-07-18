import React from 'react'



const Key = () => {

const items= [
    {name:"laptop",price:1000,qty:1},
    {name:"Hp",price:2000,qty:1},
    {name:"Dell",price:1000,qty:1},
    {name:"lap",price:1090,qty:1},
]

  return (
    <div style={{height:"100vh"}}>
        {items.map((item)=>{
          return  (
            <div className='box'>
            <h1>{item.name}</h1>
            <h3>{item.price}</h3>
            <h3>{item.qty}</h3>
            <button>+</button>
            
            </div>
          )
        })}
    </div>
  )
}

export default Key