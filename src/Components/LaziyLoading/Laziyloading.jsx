import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
   

  return (
    <div>Laziyloading
    <div className='grid grid-cols-6 gap-3'>
        {
            image.map((e,i)=>{
                return(
                    <div key={i}>
                        <div><img src={e.url} alt="" /></div>
                    </div>
                )
            })
        }
    </div>

    </div>
  )
}

export default Laziyloading