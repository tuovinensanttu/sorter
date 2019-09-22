import React from 'react';
import classNames from 'classnames';
import "./SettingArea.css";
const SettingArea = props => {
    const {rangeSlider} = props;

    return (
        <div className="setting-area-container">
            <div className="sa-left">

                <input
                    type="range"
                    className="range"
                    value={rangeSlider || ""}
                    min={10}
                    max={65}
                    onChange={props.onRangeChange}
                />

                <button
                    className={classNames({
                        "method": "true",
                        "method-selected": props.sortMethod === "bubble"
                    })}
                    onClick={() => props.onMethodChange("bubble")}
                >
                    Bubble sort
                </button>

                <button
                    className={classNames({
                        "method": true,
                        "method-selected": props.sortMethod === "insertion"
                    })}
                    onClick={() => props.onMethodChange("insertion")}
                >
                    Insertion sort
                </button>

            </div>


            <button className="sort" onClick={props.onClick}>
                Sort!
            </button>
        </div>
    )
};

export default SettingArea;
