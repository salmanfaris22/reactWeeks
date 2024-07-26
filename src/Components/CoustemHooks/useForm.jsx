import { useState } from "react"


export const  useForms = (v) => {
    const [items, setItems] =useState(v)
  return [items,(e)=>{
       setItems({
        ...items,
        [e.target.name]:e.target.value
       })
  }]
}


