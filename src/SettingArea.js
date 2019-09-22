import React from 'react';

import "./SettingArea.css";
const SettingArea = props => {
    const {rangeSlider} = props;
    return (
        <div className="setting-area-container">
            <input
                type="range"
                className="range"
                value={rangeSlider || ""}
                min={10}
                max={65}
                onChange={props.onRangeChange}
            />

            <button className="sort" onClick={props.onClick}>
                Sort!
            </button>
        </div>
    )
};

export default SettingArea;
