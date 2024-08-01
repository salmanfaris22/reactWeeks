// import React, { useCallback, useState } from 'react'
// import Chaild from './Chaild'

// const UseCallback = () => {
//     const [cont, setCount] =useState(0)

//     const handleCallback =useCallback(handleClik,[])

//     function handleClik(){
//         setCount((pre=>pre+2))
//     }
// // const handleClik = ()=>{
// //     setCount(cont+1)
// // }

//     console.log("parent loeader");
//   return (
//     <div>useCallback
//         {cont}
//         <button onClick={()=>setCount(cont+1)}>ingrement</button>
//         <Chaild handleCallback={handleCallback}/>
//     </div>
//   )
// }

// export default UseCallback


import React, { useCallback, useState } from 'react'
import Chaild from './Chaild'



const ParentComponent = () => {

  const [cont, setCount] =useState(0)

  const handleCallback = useCallback(()=>{
    setCount(p=>p-1)
  },[])
console.log("nk");
   return(
    <div>
 {cont}
    <button onClick={()=>setCount(cont+1)}>ingrement</button>
         <Chaild handleCallback={handleCallback}/>
    </div>
   )
};

export default ParentComponent;


