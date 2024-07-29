import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import Contextuse from './Contextuse'
import CoustemHook from '../CoutesmHook/CoustemHook'


export const Pass = createContext()
const Contextt = () => {


    const [state,setState] =useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then((res)=>setState(res.data))
        .catch(()=>console.log("error"))
    })

  return (
    <div>
        {/* {
            state.map((e)=>{
                return(
                    <div key={e.id}>
                        <h1>{e.title}</h1>
                    </div>
                )
            })
        } */}
      <div>
<Pass.Provider value={state}>
<CoustemHook/>
{/* <Contextuse/> */}
</Pass.Provider>
     
      </div>
    </div>
  )
}

export default Contextt