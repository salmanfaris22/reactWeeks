import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const Laziyloading = () => {

const [image,  setImage] =useState([])


useEffect(()=>{

    axios("https://jsonplaceholder.typicode.com/photos")
    .then((res)=>{
       setImage(res.data.splice(0,100))
     }).catch(()=>{
        console.log("err");
     })
    
  
},[])
   
const triggerRef = useRef(null)
  return (
    <div>Laziyloading
    <div className='grid grid-cols-6 gap-3'>
        {
            image.map((e)=>{
                return(
                    <div>
                        <div><img src={e.url} alt="" /></div>
                    </div>
                )
            })
        }
    </div>
        <div ref={triggerRef}></div>
    </div>
  )
}

export default Laziyloading