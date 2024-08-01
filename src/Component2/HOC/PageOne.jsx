import React from 'react'
import HigherOC from './HigherOC'


const PageOne = (props) => {
  return (
    <div>PageOne
       
       {props.name} "jasim"
    </div>
  )
}

export default HigherOC(PageOne)