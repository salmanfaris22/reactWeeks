import React, { useEffect, useState } from 'react'

const Memo = () => {

    const [datas, setDatas] =useState("")
    const [welcom , setWelcome] =useState(localStorage.getItem("open"))
   

    function handleChanje(e){
           setDatas(e.target.value)
  
    }


   const handleChan =()=>{
    localStorage.clear()
    setWelcome("logine pleas")
    localStorage.setItem("open","PleasLogin")

   }

    const handleClikkk =()=>{
       localStorage.setItem("name",datas)
       
       const x = localStorage.getItem("name")
       console.log(x);
       if(x.trim().length>=1){
          setWelcome("Welcome")
          localStorage.setItem("open","Welcome")

       }
      
    }

    return (
        <div className='bg-red-200 h-[100vh]'>
         <div className='h-[50vh] bg-red-800'>
         {welcom}
         </div>
         
            <div>
          
                <button onClick={handleChan}>Log out</button>
            </div>
             <div>
                <input type="text" name='name' onChange={handleChanje}/>
                <button onClick={handleClikkk}>Log in</button>
            </div>



        </div>
    )
}

export default Memo
