import React, { useState } from 'react'

const PropsCall = ({name}) => {
  const [todo,setTodo] =useState('')
  const [input, setInput] =useState([])

  return (
    <div>
      <input type="text" />
      <button>Add</button>
    </div>
  )
}

export default PropsCall