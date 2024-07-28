import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [counter,setCounter]=useState(0)
    const [count,setCount] =useState(0)

    const increment = ()=>{
        setCounter(counter+1)
    }
    const  incremente =()=>{
        setCount(count+1)
    }
    const iseven = useMemo(()=>{
    let i =0
    while(i<300000000)
        i++
    return counter%2===0
},[counter])
    
  return (
    <div>UseMemo

        <div>
            {counter}
           <div>
           {iseven? "isEven":"isOdd"}
           </div>
            <button onClick={increment}>ingrement</button>
        </div>
        <div>
            {count}
            <button onClick={incremente}>ingrement</button>
        </div>
    </div>
  )
}

export default UseMemo