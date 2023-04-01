import { useState, useRef } from "react";
import styled from "styled-components";
import chevron from '../assets/images/chevron.png';

const CollapseBody = styled.div`
    height: ${({ height })=> height}px;
    opacity: ${({ height })=> height > 0 ? 1 : 0};
    overflow: hidden;
    transition: 0.2s ease-in-out;
`
function Collapse(props){

    const content = useRef(null);
    const [height, setHeight] = useState(0);
    const [opened, setOpened] = useState(false);

    const toggleCollapse = () => {
        setHeight(height === 0 ? content.current.scrollHeight : 0);
        setOpened(!opened)
    };

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
            <CollapseBody height={height} ref={content} className='collapse__body'>
                {props.children}
            </CollapseBody>
        </div>
    )
};

export default Collapse;