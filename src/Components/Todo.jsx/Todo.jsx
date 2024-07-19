import React, { useState } from 'react'

const Todo = () => {

const [task,SetTask]  = useState(["eat breakfaset","eart one"])
const [newTask, setNewTask] = useState("")
const [editIndex ,setEditIndex]=useState(null)

function handleChange(e){
     setNewTask(e.target.value)
     setEditIndex(e.target.value)
    
}

function handleGetData(){
    if(newTask.trim().length !==0){
        console.log(newTask);
        SetTask([...task,newTask])
        setNewTask("")
    }


   
}
function handleEditData(e){

 
}
function handleEdite(index){
     

 


}
function deletTask(index){
   const updatedTask = task.filter((task , i)=> i !== index)
   SetTask(updatedTask)
}


    return (
        <div className='flex items-center justify-center h-[100vh]'>
            <div className='w-[50%] h-[50%] bg-orange-200 rounded-xl flex flex-col items-center'>
                <div>
                    <input type="text" className='mt-6 p-3 w-60 rounded-xl'  
                    name='data' 
                    // value={getData} 
                    onChange={handleChange} 
                    value={newTask}
                    placeholder='Enter Your Todo' 
                    id='task'
                    autoFocus
                    />
                   {
                    editIndex === null ?  <button onClick={handleGetData} className='ml-4'
                    type='submit'
                    >ADD</button>:
                    <button onClick={handleEditData} className='ml-4'
                    type='edit'
                    >Eidit</button>
                   }
                </div>

                <div>
                   {
                    task.map((e,index)=>{
                        return (
                            <div className='flex mt-3 gap-1' key={index}>
                            <div className='p-2 w-[300px]   bg-blue-50 rounded-lg' >{e}</div>
                            <button className='h-[50px] flex  text-center  justify-center items-center  p-2'
                            onClick={()=>deletTask(index)}
                            >delet</button>
                            <button onClick={()=>handleEdite(index)}>Edit</button>
                            <button>Compleat</button>
                        </div>
                        )
                    })
                   }
                   
                </div>
            </div>
        </div>
    )
}

export default Todo