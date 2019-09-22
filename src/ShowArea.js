import React from 'react';

import "./App.css";
const ShowArea = props => {
    const {data} = props;
    return (
        <div className="sort-item-container">
            {data.map(item => (
                <div key={item} className="sort-item" style={{height: item}}>{item}</div>
            ))}
        </div>
    );
};

export default ShowArea;
