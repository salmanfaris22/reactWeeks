import React from 'react'

const DeletedTasks = ({deletedTask,handelRestoreTask}) => {
  return (
    <div>
        <div className='h-[400px] w-[300px] bg-[#8697C4]  z-10 rounded-lg flex flex-col items-center overflow-auto'>

   {  deletedTask.length === 0 ? <h1>No one Delet tasks</h1> :
    deletedTask.map((e, index) => {
        return (
            <div key={index} className='flex bg-[#EDE8F5] w-[250px] max-h-[150px]  min-h-[50px] justify-between overflow-auto rounded-xl mt-2 '>
                <h1 className='w-200pxw-[200px] flex items-center p-1 font-bold text-black rounded-lg'>{e}</h1>
                <button 
                className='bg-[#7091E6] hover:bg-[#3D52A0] '
                onClick={() => handelRestoreTask(index)}>Resotr</button>
            </div>
        )
    })
}

</div>
    </div>
  )
}

export default DeletedTasks