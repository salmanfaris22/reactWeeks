
import React, { useEffect, useState } from 'react'
import "./fetch.css"
const FechApi = () => {

    const [post , setPost] =useState([])


    useEffect(()=>{
        fetch('https://dummyjson.com/quotes')
        .then((data)=>data.json())
        .then((data)=> data.quotes)
        .then((data)=>setPost(data.splice(0,10)))
    },[])
 
  return (
    <div style={{}}>FechApi
    <div>
       {
        post.map((list)=>{
            return(
                <div key={list.id} className='box-fech'>
                    <h1>{list.quote}</h1>
                    <h3 className='f-text'>{list.author}</h3>
                </div>
            )
        })
       }
    </div>
    </div>
  )
}

export default FechApi