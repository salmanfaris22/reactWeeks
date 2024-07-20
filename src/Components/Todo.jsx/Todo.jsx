import React, { useState } from 'react'
import DeletedTasks from './DeleteTAsks/DeletedTasks'

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


    function handleCompleat(index) {
        const moveCompleat = task.filter((task, i) => i === index)
        deletTask(index)
        setDonetask([...doneTask, moveCompleat])




    }
    function handelRestoreTask(index) {
        const resored = deletedTask.filter((task, i) => i === index)
        SetTask([...task, resored])
        const updatedTasks = deletedTask.filter((task, i) => i !== index)
        console.log(updatedTasks);
        setdeletedTask(updatedTasks)
    }


    function handelDeletOpen() {
        setDeletOpen(!deletOpen)
        console.log(deletOpen);
    }

    return (
        <div className='flex flex-col  h-[100vh] bg-[#101820]'>
            <div className='w-[100%] h-[20%] rounded-xl flex flex-col justify-center items-center'>
                <div>
                    {/* input felid */}
                    <input type="text" className=' p-3 w-[600px] shadow-sm shadow-black rounded-xl'
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
                        editIndex === null ? <button onClick={handleGetData} className='ml-4 bg-white text-black font-bold'
                            type='submit'
                        >ADD</button> :
                            <button onClick={() => handleEditData()} className='ml-4'
                                type='edit'
                            >Eidit</button>
                    }
                    <button className=' absolute right-0  bg-black' onClick={handelDeletOpen}>DeletedTasks</button>
                    <div className='absolute right-0 '>
                        {/* deleted BOX DOTOS */}
                        {deletOpen && <DeletedTasks deletedTask={deletedTask} handelRestoreTask={handelRestoreTask}/>}

                    </div>

                </div>


            </div>

            <div>
{/* TODO main Aded ToDO lists */}
                <div className='w-[100%] h-[500px] grid items-center grid-rows-2 bg-[#101822] grid-flow-col overflow-auto' onClick={() => setDeletOpen(false)}>
                    {
                        task.map((e, index) => {
                            return (


                                <div key={index} className=' w-[300px] h-[200px] bg-[#ffffff] ml-10 flex flex-col justify-between items-center rounded-xl shadow-xl shadow-black'>
                                    <div className='overflow-auto w-[200px] mt-6 h-[130px]'>
                                        {e}
                                    </div>
                                    <div className='flex h-[20%] items-center  '>
                                        <button className='h-5 flex rounded  shadow-sm shadow-black bg-black font-extralight justify-center items-center'
                                            onClick={() => deletTask(index)}
                                        >Delet</button>
                                        <button className='h-5 flex rounded  shadow-sm shadow-black bg-black font-extralight justify-center items-center'
                                            onClick={() => handleEdite(index)}>Edit</button>
                                        <button className='h-5 flex rounded  shadow-sm shadow-black bg-black font-extralight justify-center items-center'
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
                            <div key={did} className='flex justify-center items-center ml-5 w-[400px] h-[50px] mt-2  bg-[#ffffff] rounded-md shadow-sm shadow-black'
                            >{done}</div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Todo