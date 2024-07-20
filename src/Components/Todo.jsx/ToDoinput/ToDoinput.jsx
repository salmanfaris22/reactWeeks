import React from 'react'

const ToDoinput = () => {
  return (
    <div>  <input type="text" className=' p-3 w-[600px] shadow-sm shadow-black rounded-xl'
    name='data'
    // value={getData} 
    onChange={handleChange}
    value={newTask}
    placeholder='Enter Your Todo'
    id='task'
    autoFocus
/>
{
    editIndex === null ? <button onClick={handleGetData} className='ml-4 bg-white text-black font-bold'
        type='submit'
    >ADD</button> :
        <button onClick={() => handleEditData()} className='ml-4'
            type='edit'
        >Eidit</button>
}</div>
  )
}

export default ToDoinput