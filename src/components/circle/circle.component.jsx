import React from 'react';
import './circle.styles.css';


const Circle = ({percent}) => (
    <div className={`c100 p${percent}`}>
        <span>{percent}%</span>
        <div className="slice">
            <div className="bar"></div>
            <div className="fill"></div>
        </div>
    </div>
)

export default Circle;