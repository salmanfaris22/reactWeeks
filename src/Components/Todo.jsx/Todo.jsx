import React, { useState } from 'react'

const Todo = () => {

    const [task, SetTask] = useState([])
    const [newTask, setNewTask] = useState("")
    const [editIndex, setEditIndex] = useState(null)
    const [doneTask, setDonetask] = useState([])


    function handleChange(e) {
        setNewTask(e.target.value)

    }

    function handleGetData() {
        if (newTask.trim().length !== 0) {
            console.log(newTask);
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
        const updatedTask = task.filter((task, i) => i !== index)
        SetTask(updatedTask)
    }


    function handleCompleat(index) {
        const moveCompleat = task.filter((task, i) => i === index)
        deletTask(index)
        setDonetask([...doneTask, moveCompleat])


    }

    return (
        <div className='flex flex-col  h-[100vh]'>
            <div className='w-[100%] h-[20%] bg-orange-200 rounded-xl flex flex-col justify-center items-center'>
                <div>
                    <input type="text" className=' p-3 w-[600px] rounded-xl'
                        name='data'
                        // value={getData} 
                        onChange={handleChange}
                        value={newTask}
                        placeholder='Enter Your Todo'
                        id='task'
                        autoFocus
                    />
                    {
                        editIndex === null ? <button onClick={handleGetData} className='ml-4'
                            type='submit'
                        >ADD</button> :
                            <button onClick={() => handleEditData()} className='ml-4'
                                type='edit'
                            >Eidit</button>
                    }
                </div>


            </div>

            <div>

                <div className=' w-[100%] h-[500px] grid items-center grid-rows-2 grid-flow-col' >
                    {
                        task.map((e, index) => {
                            return (


                                <div key={index} className='w-[300px] h-[200px]  ml-10 flex flex-col justify-between items-center rounded-xl shadow-md shadow-black'>
                                    <div className='w-[200px] mt-6 h-[130px]'>
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

                                //     <div className='flex mt-3 gap-1' key={index}>
                                //     <div className='p-2 w-[300px]   bg-blue-50 rounded-lg' >{e}</div>
                                //     <button className='h-[50px] flex  text-center  justify-center items-center  p-2'
                                //     onClick={()=>deletTask(index)}
                                //     >delet</button>
                                //     <button onClick={()=>handleEdite(index)}>Edit</button>
                                //     <button onClick={()=>handleCompleat(index)}>Compleat</button>
                                // </div>
                            )
                        })
                    }

                </div>

            </div>
            {
                doneTask.map((done, did) => {
                    return (
                        <div key={did}>
                            <div>{done}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Todo