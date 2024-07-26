import React, { createContext } from 'react'
import Context1 from './Context1'


  export const Ab= createContext()


const Context = () => {
  return (
    <div className='h-[100vh]'>
      parent
  <Ab.Provider  value={"hyyyyyyyy"}>
       <Context1/>
  </Ab.Provider>
  
    </div>
  )
}

export default Context
