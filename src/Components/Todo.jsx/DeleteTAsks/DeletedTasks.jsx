import React from 'react'

const DeletedTasks = ({deletedTask,handelRestoreTask}) => {
  return (
    <div>
        <div className='h-[400px] w-[300px] bg-slate-500 z-10 rounded-lg flex flex-col items-center overflow-auto'>

   {  deletedTask.length === 0 ? <h1>No one Delet tasks</h1> :
    deletedTask.map((e, index) => {
        return (
            <div key={index} className='flex w-[250px] justify-between bg-white rounded-xl mt-2 '>
                <h1 className='w-200pxw-[200px] flex items-center p-1 rounded-lg'>{e}</h1>
                <button onClick={() => handelRestoreTask(index)}>Resotr</button>
            </div>
        )
    })
}

</div>
    </div>
  )
}

export default DeletedTasks