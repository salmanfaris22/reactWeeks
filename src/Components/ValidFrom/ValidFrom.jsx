import React, { useEffect, useState } from 'react'

const ValidFrom = () => {
  const initialValue = {username : "" , email : "", password : ""} 

  const [formValue, setFormValue] =useState(initialValue)
  const [formError, setFormError] =useState({})
  const [isSubmit , setIsSubmit] =useState(false)

 let handleChange = (e)=>{
 
    const {name, value} = e.target
   
    setFormValue({...formValue, [name]: value})
    console.log(formValue);

 }

 let handleSubmit = (e)=>{
    e.preventDefault()
    setFormError(validate(formValue))
    setIsSubmit(true)
   
 }

 useEffect(()=>{
    if(Object.keys(formError).length === 0 && isSubmit){
      console.log(formValue);
    }
 },[formError])

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
    <div className='flex h-[100vh] w-[100%] items-center justify-center flex-col '>
      <pre>{JSON.stringify(formValue,undefined ,2)}</pre>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>UserName</label>   <input type="text" className='border'  name='username' placeholder='UserName' 
            value={formValue.username}
            onChange={handleChange}
            />
                <p>{formError.username}</p>
            </div>
          <div>
            <label>Email</label> <input type="email" className='border'  name='email' placeholder='Email' 
            value={formValue.email}
            onChange={handleChange}
            />
            <p>{formError.email}</p>
          </div>
          <div>
            <label>Password</label> <input   type="text" className='border' name='password' placeholder='Password'
            value={formValue.password}
            onChange={handleChange}
            />
                <p>{formError.password}</p>
          </div>
          <div>
            <button>Submit</button>
          </div>

        </form>
      </div>
    </div>
  )
}

