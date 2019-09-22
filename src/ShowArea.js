import React from 'react';

import "./App.css";
const ShowArea = props => {
    const {data, sortMethod, sortIndex, innerIndex} = props;

    const useIndex = sortMethod === "bubble" ? sortIndex : innerIndex;

    return (
        <div className="sort-item-container">
            {data.map((item, index) => (
                <div
                    key={item}
                    className="sort-item"
                    style={{height: item, backgroundColor: index === useIndex ? "#B00" : "#ccc"}}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

export default ShowArea;
