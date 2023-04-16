import React from 'react'
import { useState } from "react"; 
import chevronDown from "./images/chevrondown.png"
import chevronUp from "./images/chevronup.png"
import "./AccordionStyle.css"


function Accordion () {
    const [isActive, setIsActive] = useState(false); 

    const toggleActive = () => {
        setIsActive(!isActive)
    }
    
  return (
    <div className ="wrapper">
        <div className = "accordion">
            <div className = "title" onClick={toggleActive}>
                <h3>Coronavirus - COVID-19 support</h3>
                <div>
                    {
                        isActive ? '-':'+' 
                    }
                </div>
            </div>
            <div className = "content">
                {isActive && <div>
                    <p>
                        Get the advice you need. Check the latest COVID-19 restrictions before you travel
                    </p>
                    <a href ="">Learn more</a>
                </div>
                }
            </div>
        </div>
    </div>
  )
};

export default Accordion

