import React, { useContext } from 'react'
import { Ab } from './Context'




const Context2 = () => {

    let name = useContext(Ab)

  return (
    <div>
     im hear  {name}
    </div>
  )
}

export default Context2
