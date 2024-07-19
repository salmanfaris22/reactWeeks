import React from 'react'

const From = ({handleSubmit,getVelue ,handeleChanje,fromErrorusername,fromErroremail,fromErrorpassword}) => {
  return (
    <div>
        {/* <div> <pre>{JSON.stringify(getVelue,undefined,2)}</pre> */}
            <div className=''>
                <form onSubmit={handleSubmit} className='h-[600px] bg-stone-100 rounded-lg shadow-black shadow-md w-[400px] flex flex-col items-center justify-center gap-8' >
                    <div className='flex flex-col gap-3'>
                        <label className='font-thin'>UserName : </label>
                        <input type="text" name='username' placeholder='UserName' value={getVelue.username}
                            className='w-[250px] h-[30px] rounded-md  p-4 '

                            onChange={handeleChanje}

                        />
                       <p className='text-red-600 text-xs'>{fromErrorusername}</p>
                    </div>

                    <div className='flex gap-3 flex-col'>
                        <label className='font-thin'>Email : </label>
                        <input type="email" name='email' placeholder='Email' value={getVelue.email}
                            className='w-[250px] h-[30px] rounded-md  p-4 '
                            onChange={handeleChanje}

                        />
                             <p className='text-red-600 text-xs'>{fromErroremail}</p>
                    </div>


                    <div className='flex gap-3 flex-col '>
                        <label className='font-thin'>Password : </label>
                        <input   type="password" name='password' placeholder='Passowrd' value={getVelue.password}
                            className='w-[250px] h-[30px] rounded-md  p-4 '
                            onChange={handeleChanje}
                        />
                          <p className='text-red-600 text-xs'>{fromErrorpassword}</p>
                    </div>

                    <div>
                        <button className='p-1 h-8 w-28 bg-blue-400 text-white font-thin rounded-xl text-center '>Submit</button>
                    </div>
                </form>
            </div></div>
    
  )
}

export default From