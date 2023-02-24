import { useState } from "react";
import chevron from '../assets/images/chevron.png';

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
                <div className={opened ? "chevron opened" : "chevron closed"}>
                    <img src={chevron} alt="chevron"/>
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