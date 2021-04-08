import React from 'react';
import './circle.css'

const Circle = (props) => {
    return (
        <div className={`circle ${props.color}`}>
            <p>{props.id}</p>
        </div>
    );
};

export default Circle;