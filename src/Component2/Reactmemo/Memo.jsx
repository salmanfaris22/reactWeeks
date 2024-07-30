import React, { memo } from 'react'

const Memo = ({pass}) => {
    console.log("chaild 2");
  return (
    <div >{pass}</div>
  )
}
     
export default React.memo(Memo)