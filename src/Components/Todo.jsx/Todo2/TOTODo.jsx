import React, { useState } from 'react'

const TOTODo = () => {

    const [todo, setTodo] = useState([])
    const [get, setGet] = useState("")
    const [editTodo, setEditTodo] =useState(false)
    const [editSetter,setEditsSetter] = useState(null)
    

    function handleinputTod(e) {
        setGet(e.target.value)
     
    }


    function handleGetSetTodo() {
        if (get.trim().length !== 0) {
            setTodo([...todo, get])
        }

        setGet("")
    }

    function deliteTodoData(index){
         const dele = todo.filter((e , i)=> i !== index)
         setTodo(dele)
    }

    function editeToDoHandle(index){
        setGet(todo[index])
        setEditTodo(true)
        setEditsSetter(index)
        
    }
  function editsTodoHandel(){
    todo[editSetter] = get
  
    setTodo([...todo])
    setEditTodo(false)
    setGet("")

  }
function handleComleateTodo(index){
   
   let  comp = [`compleated ${todo[index]} `,[true]]
     todo[index] = comp
     setTodo([...todo])
   console.log(todo);

}
    return (
        <div className='h-[100vh] flex items-center flex-col'>
            <div>
                <input className='border border-black' type="text" value={get} onChange={handleinputTod} />
                <button onClick={handleGetSetTodo}>ADD</button>
                {editTodo && <button onClick={editsTodoHandel}>Edit</button>}
            </div>
            <div className='flex flex-col'>
                {
                    todo.map((e, index) => {
                        return (
                            <div key={index} className='flex'>
                                <div  className='mt-3 p-3 w-[300px] h-[50px] bg-slate-200'>
                                    {e}
                                </div>
                                {    <div>
                                    <button className='' onClick={()=>deliteTodoData(index)}>
                                        delet
                                </button>
                                 <button onClick={()=>editeToDoHandle(index)}>Edit</button>
                               
                                <button onClick={(()=>handleComleateTodo(index))}>Compleaat</button>
                                </div> }
                      
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TOTODo