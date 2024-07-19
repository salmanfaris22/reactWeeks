import React, { useEffect, useState } from 'react'
import Logout from './logout'

const ValidFromMyself = () => {

    const initialValue = { username: "", email: "", password:"", }

    const [getVelue, setGetVlaue] = useState(initialValue)
    const [fromError , setFromErroe] =useState({})
    const [isSubmit , setIsSubmit] =useState(false)
    const [open , isOpen] = useState(false)

  const handeleChanje = (e)=>{
  
     const {name , value} = e.target
    setGetVlaue({...getVelue, [name] : value})
    setIsSubmit(true)

     }


    useEffect(()=>{
       if(Object.keys(fromError).length===0 && isSubmit){
         console.log("done");
         isOpen(true)
    }

    
    },[fromError])

  const handleSubmit = (e) =>{
         e.preventDefault()
       setFromErroe(validate(getVelue))
  }

  const validate = (values)=>{
    const error ={}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  
    if(!values.username){
      error.username = "UserName Requed....!"
    }
    if(!values.email){
      error.email = "Email Requed....!"
    }else if(!regex.test(values.email)){
    error.email = "not valid email...!"
    }
    if(!values.password){
      error.password = "Password Requed....!"
    }
  
     return error
    
  }

    return (
        <div className='h-[100vh] flex flex-col items-center justify-center bg-slate-400'>
          {open ? <Logout log={open} setLog={isOpen}/> :<div> <pre>{JSON.stringify(getVelue,undefined,2)}</pre>
            <div className=''>
                <form onSubmit={handleSubmit} className='h-[600px] bg-stone-100 rounded-lg shadow-black shadow-md w-[400px] flex flex-col items-center justify-center gap-8' >
                    <div className='flex flex-col gap-3'>
                        <label className='font-thin'>UserName : </label>
                        <input type="text" name='username' placeholder='UserName' value={getVelue.username}
                            className='w-[250px] h-[30px] rounded-md  p-4 '

                            onChange={handeleChanje}

                        />
                       <p className='text-red-600 text-xs'>{fromError.username}</p>
                    </div>

                    <div className='flex gap-3 flex-col'>
                        <label className='font-thin'>Email : </label>
                        <input type="email" name='email' placeholder='Email' value={getVelue.email}
                            className='w-[250px] h-[30px] rounded-md  p-4 '
                            onChange={handeleChanje}

                        />
                             <p className='text-red-600 text-xs'>{fromError.email}</p>
                    </div>


                    <div className='flex gap-3 flex-col '>
                        <label className='font-thin'>Password : </label>
                        <input   type="password" name='password' placeholder='Passowrd' value={getVelue.password}
                            className='w-[250px] h-[30px] rounded-md  p-4 '
                            onChange={handeleChanje}
                        />
                          <p className='text-red-600 text-xs'>{fromError.password}</p>
                    </div>

                    <div>
                        <button className='p-1 h-8 w-28 bg-blue-400 text-white font-thin rounded-xl text-center '>Submit</button>
                    </div>
                </form>
            </div></div>}
        </div>
    )
}

export default ValidFromMyself