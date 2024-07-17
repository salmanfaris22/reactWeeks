import React from 'react'
import './props.css'
import Props from './props'
const Proms = () => {
  return (
    <div className='pro-main'>
        
        <Props name="jasim" age={29} isStudnet={false} />
        <Props name="sian" age={9} isStudnet={true} />
        <Props name="lalu" age={19} isStudnet={true} />
    
    </div>
  )
}

export default Proms