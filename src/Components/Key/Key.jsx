import React, { useState } from 'react'



const Key = () => {

const items= [
    {id:1,name:"Hp",price:2000,qty:1 ,left:10},
    {id:2,name:"Dell",price:1000,qty:1,left:2},
    {id:3,name:"lap",price:1090,qty:1,left:7},
]

const [qtys, setQyts] = useState(items)

let onChange = (id)=>{
  let newItem =   qtys.map((ite)=>{
        return (
            ite.qty<ite.left ? ite.id === id ? {...ite, qty: ite.qty+1} : ite : ite 
        )
    })
   setQyts(newItem) 
}

let onChanges = (id)=>{
    let newItem =   qtys.map((ite)=>{
          return (
               ite.qty>0 ? ite.id === id ? {...ite, qty: ite.qty-1} : ite : ite
              
          )
      })
     setQyts(newItem) 
  }
  return (


    <div style={{height:"100vh"}}>
        {qtys.map((item)=>{
          return  (
            <div className='box' key={item.id}>
            <h1>{item.name}</h1>
            <h3>{item.price}</h3>
            <h3>{item.qty}</h3>
            <button onClick={()=>onChange(item.id)}>+</button>
            <button onClick={()=>onChanges(item.id)}>-</button>
            
            </div>
          )
        })}
    </div>
  )
}

export default Key