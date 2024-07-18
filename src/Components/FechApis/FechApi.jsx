
import React, { useEffect, useState } from 'react'

const FechApi = () => {

    const [post , setPost] =useState([])


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts ')
        .then((data)=>data.json())
        .then((data)=> setPost(data.splice(0,10)))
    },[])
 
  return (
    <div style={{}}>FechApi
    <div>
        {
            post.map((data)=>{
                return (
                    <div style={{background:"black",color:"white"}} key={data.id}>
                        <h1>{data.title}</h1>
                        <p>{data.body}</p>
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default FechApi