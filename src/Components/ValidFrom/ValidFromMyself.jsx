import React, { useEffect, useState } from 'react'
import Logout from './logout'
import From from './From'

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
    }else if(values.password.length<=4){
         error.password = `pleas try  
         les than 4 charechter`
    }else if(values.password){
       let pas=values.password.split("")
    
       let num=1
       for(let i of pas){
           if(i===i.toUpperCase()){
               num=num+1
           }
       }
       if(num===1){
         error.password = "you have must Capitel Letter"
       }
       
       console.log(num);
    }
  
     return error
    
  }

    return (
        <div className='h-[100vh] flex flex-col items-center justify-center bg-slate-400'>
          {open ? <Logout log={open} setLog={isOpen}/> :<From handleSubmit={handleSubmit} getVelue={getVelue}
          handeleChanje={handeleChanje} fromErrorusername={fromError.username} fromErroremail={fromError.email}
          fromErrorpassword={fromError.password}
          />}
        </div>
    )
}

export default ValidFromMyself