import React, { useState } from "react"
import "./them.css"




function SwitchTheme() {
    const [name, setName] = useState(true);
    const [color, setColor] = useState(false);
    const switchThems = () => {
        setName(!name)
        setColor(!color)

    }

      
    return (
        
        <div className="them-main" style={{ background: color ? "black" : "white" }}>

            <button onClick={switchThems}>{name ? "DarkMoode" : "LightMoode"}</button>

        </div>
    )


}


export default SwitchTheme