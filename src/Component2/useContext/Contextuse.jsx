import React, { useContext } from 'react'
import { Pass } from './Context'


const Contextuse = () => {

    const ids = useContext(Pass)

  return (
    <div>Contextuse
        {ids.map((e)=>{
            return(
                <div>
                    {e.body}
                </div>
            )
        })}
    </div>
  )
}

export default Contextuse