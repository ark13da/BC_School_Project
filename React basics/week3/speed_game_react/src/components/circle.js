import React from 'react';
import './circle.css'

const Circle = (props) => {
    return (
        <div className={`circle ${props.color} ${props.active ? "active" : ""}`} onClick={props.click}
            style={{pointerEvents:props.disabled?"auto":"none"}}>
            
        </div>
    );
};

export default Circle;