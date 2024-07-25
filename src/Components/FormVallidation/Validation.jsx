import { getValue } from '@testing-library/user-event/dist/utils'
import React, { useEffect, useState } from 'react'

const Validation = () => {


    const [getValue , setGetvalue] = useState({username:"",email:"",password:""})
    const [formError, setFormError] =useState({})
    const [isSubmit ,setIsSubmit] =useState(false)
    const [next ,setNext] =useState(false)

    function handleChangeValidion(e){

     const {name,value} =e.target
     setGetvalue({...getValue,[name]:value})
   
     }
     function handleChangeemail(e){
        const {name,value} =e.target
     setGetvalue({...getValue,[name]:value})

     }
     function handleChangePassoword(e){
        const {name,value} =e.target
        setGetvalue({...getValue,[name]:value})
   
    
     }



function handleSubmitbutton(e){
    e.preventDefault()
    setFormError(validate(getValue))
    setIsSubmit(true)
    console.log(formError);
}



useEffect(()=>{
    if(Object.keys(formError).length === 0 && isSubmit){
        setNext(true)
        console.log("open");
      }
},[formError])
const validate = (val)=>{

    
   const error = {}

   if(!val.username){
    error.username="pleas text user name"
   }

   if(!val.email){
    error.email="pleas enter email"
   }

   if(!val.password){
    error.password="pleas text user password"
   }
  console.log(error);
   return error
}
  return (
    <div className='flex flex-col justify-center items-center'>
        <pre>{JSON.stringify(getValue,undefined ,2)}</pre>
        <form className='mt-2' onSubmit={handleSubmitbutton} >
           <div>
           <label>Name</label><input type="text"  className='border' name='username' onChange={handleChangeValidion} value={getValue.username}/>
           <p className='text-red-700'>{formError.username}</p>
           </div>
           <div>
           <label>Email</label><input type="email"  className='border'name='email' onChange={handleChangeemail} value={getValue.email}/>
           <p className='text-red-700'> {formError.email}</p>
           </div>
           <div>
           <label>Password</label><input type="password"  name="password" className='border' onChange={handleChangePassoword} value={getValue.password}/>
            <p className='text-red-700'>{formError.password}</p>
           </div>
           <div>
            <button>Submit</button>
           </div>
        </form>

        {next && 
        <div className='w-[100px] h-[100px] bg-red-500'>Hello <button onClick={()=>setNext(false)}>LogOut</button></div>
        }
        </div>
  )
}

export default Validation