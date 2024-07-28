import React, { useReducer } from 'react'




function reducer(prestate,action){
    // eslint-disable-next-line default-case
    switch (action){
        case "increment":
            return {
                ...prestate,
                number:prestate.number+1
            }
        case "red" :
            return {
                ...prestate,
                color:"red"
            }     
        case "green" :
            return {
                ...prestate,
                color:"green"
            }

    }
}

const Reduce = () => {
    const initialState = { number: 0, color: "red" };
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{color:state.color}}>
        {state.number}
        <button onClick={()=>dispatch("increment")}>ingrement</button>
        <button onClick={()=>dispatch("green")}>green</button>
        <button onClick={()=>dispatch("red")}>red</button>
    </div>
  )
}

export default Reduce