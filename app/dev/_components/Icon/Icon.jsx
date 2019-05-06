import React from 'react';
import './Icon.scss';

function Icon(props) {
    return (
        <p className="icon">
            <i id={props.name} className={`fab fa-${props.name}`}></i>
        </p>
    )
};

export default Icon;
