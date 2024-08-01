import React, { createContext, useState } from 'react'
import ContextPass from './Context'


export const Context =createContext()

const HomeRount = () => {
    const [open ,setOpen] = useState(true)
  return (
    <div>
    {open ? 
    <div className='w-[100%] bg-yellow-300'>hello</div>
    :<div className='h-[300px] bg-yellow-400'>hy</div>}

    <button className='md:hidden' onClick={()=>{
        setOpen(!open)
    }}>
        {open ? "open":"cloe"}</button>
    </div>
  
  )
}

export default HomeRount