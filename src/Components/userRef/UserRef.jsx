import React, { useEffect, useRef, useState } from 'react'

const UserRef = () => {
   let ref =  useRef()

   useEffect(()=>{
     ref.current.focus()
   },[])


  const [count, setCount] =useState(0)

 let  plusCount = ()=>{
    setCount((count)=>count+1)
 }

  return (
    <div style={{height:"100vh",background:""}}>
        UserRef

        <input ref={ref} type="text" />
       <h1>{count}</h1>
        <button onClick={plusCount}>+</button>
        </div>
  )
}

export default UserRef