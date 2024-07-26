import React from 'react'
import { useForms } from './useForm'



const useForm = () => {


    const [vale ,hanldeChange] = useForms({
        name:"",
        passsword:""
    })
console.log(vale);
  return (
    <div className='h-[100vh]'>useForm
        <input type="text" name='name' placeholder='Name' onChange={hanldeChange} />
        <input type="text" name='password' placeholder='password' onChange={hanldeChange} />

    </div>
  )
}

export default useForm