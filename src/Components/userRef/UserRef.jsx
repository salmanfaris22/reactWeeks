import React, { useEffect, useRef, useState } from 'react'

const UserRef = () => {
   let ref =  useRef()

   useEffect(()=>{
     ref.current.focus()
   },[])

  
  const [count, setCount] =useState(0)
  const [co, setCo] =useState("green")

  
  useEffect(()=>{
    document.title = `${count} ${co}`
  },[count,co])

 let  plusCount = ()=>{
    setCount((count)=>count+1)
    chaColor()
 }

  let chaColor =()=>{
       count%2===0 ?  setCo("red"):setCo("green")
  }
   
  return (
    <div style={{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
        UserRef
        
        <input ref={ref} type="text" />
       <h1 style={{color:co}}>{count}</h1>
        <button onClick={plusCount}>+</button>
        </div>
  )
}

export default UserRef