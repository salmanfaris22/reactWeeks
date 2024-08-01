import React, { useContext } from 'react'


import { Context } from './HomeRount'
const ContextPass = () => {
    const name = useContext(Context)
  return (
    <div>
      {name}
    </div>
  )
}

export default ContextPass
