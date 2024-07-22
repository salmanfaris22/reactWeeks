import React, { useState } from 'react'
// import DeletedTasks from './DeleteTAsks/DeletedTasks'

const Todo = () => {

    const [task, SetTask] = useState([])
    const [newTask, setNewTask] = useState("")
    const [editIndex, setEditIndex] = useState(null)
    const [doneTask, setDonetask] = useState([])
    const [deletedTask, setdeletedTask] = useState([])
    const [deletOpen, setDeletOpen] = useState(false)


    function handleChange(e) {
        setNewTask(e.target.value)

    }
 

    function handleGetData() {
        if (newTask.trim().length !== 0) {
           
            SetTask([...task, newTask])
            setNewTask("")
        }
    }

    function handleEditData(e) {
         task[editIndex] = newTask
        handleEdite()
        setNewTask("")
        setEditIndex(null)
    }

    function handleEdite(index) {
        setNewTask(task[index])
        setEditIndex(index)
    }


    function deletTask(index) {

        const deleted = task.filter((task, i) => i === index)
        setdeletedTask([...deletedTask, deleted])


        const updatedTask = task.filter((task, i) => i !== index)
        SetTask(updatedTask)

    }

    function delPermenet(index){
        const updatedTask = task.filter((task, i) => i !== index)
        SetTask(updatedTask)
    }

    function handleCompleat(index) {
        const moveCompleat = task.filter((task, i) => i === index)
        delPermenet(index)
        setDonetask([...doneTask, moveCompleat])
     }

    function handelRestoreTask(index) {

        const resored = deletedTask.filter((task, i) => i === index)
        SetTask([...task, resored])

        const updatedTasks = deletedTask.filter((task, i) => i !== index)
        
        setdeletedTask(updatedTasks)

    }


    function handelDeletOpen() {
        setDeletOpen(!deletOpen)
       
    }
function reversTask(){
    SetTask([...task.reverse()])
}

function sortTask(){
    SetTask([...task.sort()])
}
    return (
        <div className='flex flex-col  h-[100vh] bg-[#ADBBDA]'>
            <div className='w-[100%] h-[20%] rounded-xl flex flex-col justify-center items-center'>
 
                <div>
                <button onClick={reversTask}>Reverse</button>
                <button onClick={sortTask}>Short</button>
                    {/* input felid */}
                    <input type="text" className=' p-3 w-[600px] shadow-sm shadow-black bg-[#EDE8F5] border border-[#EDE8F5] rounded-xl'
                        name='data'
                        // value={getData} 
                        onChange={handleChange}
                        value={newTask}
                        placeholder='Enter Your Todo'
                        id='task'
                        autoFocus
                    />
                    {/* ADD EDIT BUTTON */}
                    {
                        editIndex === null ? <button onClick={handleGetData} className='ml-4 bg-[#7091E6] hover:bg-[#3D52A0] text-white font-bold'
                            type='submit'
                        >ADD</button> :
                            <button onClick={() => handleEditData()} className='ml-4 bg-[#7091E6] hover:bg-[#3D52A0] text-white font-bold'
                                type='edit'
                            >Eidit</button>
                    }
                    <button className=' absolute right-0  bg-[#7091E6] hover:bg-[#3D52A3]' onClick={handelDeletOpen}>DeletedTasks</button>
                    <div className='absolute right-0 '>
                        {/* deleted BOX DOTOS */}
                        {deletOpen &&  <div>
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
    </div>}

                    </div>

                </div>


            </div>

            <div>
{/* TODO main Aded ToDO lists */}
                <div className='w-[100%] h-[500px] grid items-center grid-rows-2 bg-[#ADBBDA] grid-flow-col overflow-auto' >
                    {
                        task.map((e, index) => {
                            return (


                                <div key={index} className=' w-[300px] h-[200px] bg-[#EDE8F5] ml-10 flex flex-col justify-between items-center rounded-xl shadow-md shadow-blck'>
                                    
                                    <div className='overflow-auto w-[200px] mt-6 h-[130px]'>
                                        {e}
                                    </div>
                                    <div className='flex h-[20%] items-center  '>
                                        <button className='h-5 flex rounded   shadow-black bg-[#7091E6] hover:bg-[#3D52A0]  hover:bg-[#3D52A0]k font-bold justify-center items-center'
                                            onClick={() => deletTask(index)}
                                        >Delet</button>
                                        <button className='h-5 flex rounded  shadow-black bg-[#7091E6] hover:bg-[#3D52A0] font-bold justify-center items-center'
                                            onClick={() => handleEdite(index)}>Edit</button>
                                        <button className='h-5 flex rounded   shadow-black bg-[#7091E6] hover:bg-[#3D52A0] font-bold justify-center items-center'
                                            onClick={() => handleCompleat(index)}>Compleat</button>
                                    </div>
                                </div>

                             
                            )
                        })
                    }

                </div>

            </div>
            <br />
            <div className='ml-9 mt-10 text-2xl font-bold text-white'>Compleated TASK</div>
            <br />
 {/* Compleated Task */}
            <div className=' w-[100%] h-[450px] grid items-center grid-rows-2 grid-flow-col overflow-auto' >
                {
                    doneTask.map((done, did) => {
                        return (
                            <div key={did} className='flex justify-center items-center ml-5 w-[400px] h-[50px] mt-2 text-white bg-[#8697C4] rounded-md shadow-sm shadow-black overflow-auto'
                            ><del>{done}</del></div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Todo