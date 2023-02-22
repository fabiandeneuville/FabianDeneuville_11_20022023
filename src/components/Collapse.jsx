import { useState } from "react";
import chevronUp from '../assets/images/chevron-up.png';
import chevronDown from '../assets/images/chevron-down.png';

function Collapse(props){

    const [opened, setOpened] = useState(false)

    const toggleCollapse = () => {
        setOpened(!opened)
    }

    return (
        <div className="collapse">
            <div 
            className="collapse__header"
            onClick={() => toggleCollapse()}
            >
                <div>
                    {props.heading}
                </div>
                <div>
                    {opened ? (
                        <img src={chevronUp} alt="Chevron vers le haut" />
                    ) : (
                        <img src={chevronDown} alt="Chevron vers le bas"/>
                    )}
                </div>
            </div>
            {opened && 
                <div className="collapse__content">
                    {props.children}
                </div>
            }

        </div>
    )
}

export default Collapse;