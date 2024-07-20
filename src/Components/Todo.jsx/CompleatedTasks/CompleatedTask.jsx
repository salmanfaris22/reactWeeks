import React from 'react'

const CompleatedTask = ({doneTask}) => {
  return (
    <div className=' w-[100%] h-[450px] grid items-center grid-rows-2 grid-flow-col overflow-auto' >
    {
        doneTask.map((done, did) => {
            return (
                <div key={did} className='flex justify-center items-center ml-5 w-[400px] h-[50px] mt-2  bg-[#ffffff] rounded-md shadow-sm shadow-black'
                >{done}</div>
            )
        })
    }

</div>
  )
}

export default CompleatedTask