import { type } from '@testing-library/user-event/dist/type'
import React, { useReducer } from 'react'

function valueReduce(prevState , action){
   // eslint-disable-next-line default-case
   switch(action.type){
        
    case "change-value" :
        return {
            ...prevState,
           number:prevState.number + action.payload
            
            
        }
   
       case "change-color":
            return {
                ...prevState,
                color : action.payload
            }
    case "change-reset" :
        return {
            ...prevState,
            number:0

            
        }        
   }
}

const Usereaducer = () => {
const [state , dispatch] =useReducer(valueReduce , {
    number:0,
    color :"Red",
})
  return (
    <div className='h-[100vh]' style={{color:state.color}}>Usereaducer
       <div>{state.number}</div>
       <button  
       onClick={()=>dispatch({
        type : 'change-value',
        payload : 1
       })}
       >Increment</button>
      <button 
       onClick={()=>dispatch({
        type : 'change-value',
        payload : -1
       })}
      >Decrement</button>
       <button 
        onClick={()=>dispatch({
            type : 'change-reset',
            payload : 0
        })}
       >reset</button>


       <button 
        onClick={()=>dispatch({
            type : 'change-color',
            payload : "red"
        })}
       >Red</button>
       <button 
        onClick={()=>dispatch({
              type : 'change-color',
            payload : "blue"
        })}
       >Blue</button>
   
       
    </div>
  )
}

export default Usereaducer