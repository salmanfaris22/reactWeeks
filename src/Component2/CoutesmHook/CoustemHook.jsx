import React from 'react'
import { Fetch } from './Fetch'
const CoustemHook = () => {

const {data,erorr,load}= Fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    if(load){
        return<>loeading........</>
    }
    console.log(erorr);
    if(erorr){
        return <>error.........</>
    }
  return (
    <div>{data.map((e)=>{
        return (
            <div className='bg-slate-100 mt-4' key={e.id}>
                
                {e.body}
            </div>
        )
    })}</div>
  )
}

export default CoustemHook