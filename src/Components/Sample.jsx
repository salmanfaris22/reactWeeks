import React, { useState } from 'react'



function  Sample(){

    const [countNumber, setCountNumber] =useState(0)
//  pre sater // uniyen diareacton data flow
   function handleCounter(){
      for(let i=0;i<5;i++){
        setCountNumber(countNumber+1)
      }
   }

  return (

   <div>
      <div>{countNumber}</div>
      <div onClick={handleCounter}><button>Clik</button></div>
   </div>

  )
}

export default Sample