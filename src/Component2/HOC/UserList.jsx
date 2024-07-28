import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserList = () => {
const [items,setItems]=useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res=>setItems(res.data)))
  },[])
  console.log(items);
  return (
    <div>HigherOC

      {
        items.map((e)=>{
          return (
            <div key={e.id} className='bg-slate-300 mt-3'>
              <h1>{e.title}</h1>

            </div>
          )
        })
      }
    </div>
  )
}

export default UserList