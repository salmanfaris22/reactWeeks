import React, { useState } from 'react'
import Memo from './Memo'

const ReactMemo = () => {
    const [count,setCount]=useState(0)
  

    console.log('parent');
const pass  = "passingValue"
  return (
    <div>
        <Memo pass={pass} />
        {count}
       <button onClick={()=>setCount(count+1)}>Clik</button>
        
    </div>
  )
}

export default ReactMemo