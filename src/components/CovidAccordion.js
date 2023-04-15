import React from 'react'
import { useState } from "react"; 
import "./AccordionStyle.css"


function CovidAccordion () {
    const [isActive, setIsActive] = useState(false); 

    const toggleActive = () => {
        setIsActive(!isActive)
    }

  return (
    <div className ="wrapper">
        <div className = "accordion">
            <div className = "title" onClick={toggleActive}>
                <h3>Coronavirus - COVID-19 support</h3>
                <span>
                    <img src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/chevron-bottom-512.png" alt="chevronimage"/>
                </span>
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

export default CovidAccordion