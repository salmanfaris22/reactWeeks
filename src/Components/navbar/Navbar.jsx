import React, { useState } from "react"
import "./navbar.css"


function Navbar(){

const [isOpen, setIsOpen] =useState(false)

function openNav(){
    setIsOpen(!isOpen)
}

    return(
       <div >
        { isOpen && <div  className="nabar-main">
          <li>Home</li>
          <li>About</li>
          <li>Conatct</li>
        </div>  
       }
         <div>
            <div onClick={openNav} className="btn">=</div>
         </div>
       </div>
    )
}


export default Navbar