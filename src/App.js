import React, {Component} from 'react';

import ShowArea from "./ShowArea";
import SettingArea from "./SettingArea";

import {bubbleSort} from "./bubbleSort";
import {insertionSort} from "./insertionSort";

import "./App.css";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortMethod: 'bubble',
            data: [],
            sortIndex: 0,
            innerIndex: 0,
            swapped: false,
            rangeSlider: 20,
        }
    }

    componentDidMount() {
        this.handleRangeSlider({target: {value: 20}});
    }


    shuffle = data => {
        return data.sort(() => Math.random() -0.5)
    };

    handleRangeSlider = event => {
        const sliderValue = event.target.value;

        let generatedArray = [];

        for (let i = parseInt(sliderValue) * 5; i > 5; i -= 5) {
            generatedArray.push(i);
        }

        generatedArray = this.shuffle(generatedArray);

        this.setState({ data: generatedArray, rangeSlider: sliderValue });
    };

    handleSortMethodChange = value => {
        this.setState({ sortMethod: value})
    };

    handleBubbleSort = () => {
        const { data, sortIndex, swapped } = this.state;

        const {newData, newSortIndex, newSwapped} = bubbleSort(data, sortIndex, swapped);

        this.setState({
            data: newData,
            sortIndex: newSortIndex,
            swapped: newSwapped
        }, () => {
            setTimeout(() => {
                if (sortIndex === data.length -1 && !swapped) return;
                if (sortIndex < data.length - 1) this.handleBubbleSort();
            });
        });
    };

    handleInsertionSort = () => {
        const {data, sortIndex, innerIndex} = this.state;

        const {newData, newSortIndex, newInnerIndex} = insertionSort(data, sortIndex, innerIndex);
        this.setState({
            data: newData,
            sortIndex: newSortIndex,
            innerIndex: newInnerIndex
        }, () => {
            setTimeout(() => {
                if (sortIndex !== data.length - 1) this.handleInsertionSort();
            }, 10);
        });
    };

    onSort = () => {
        const {sortMethod} = this.state;
        if (sortMethod === "bubble") this.handleBubbleSort();
        else if (sortMethod === "insertion") this.handleInsertionSort();
    };

    render() {
        const {sortMethod, data, rangeSlider, sortIndex, innerIndex} = this.state;
        return (
            <div className="container">
                <div className="show-area">
                    <ShowArea
                        sortMethod={sortMethod}
                        data={data}
                        sortIndex={sortIndex}
                        innerIndex={innerIndex}
                    />
                </div>
                <div className="setting-area">
                    <SettingArea
                        rangeSlider={rangeSlider}
                        sortMethod={sortMethod}
                        onRangeChange={this.handleRangeSlider}
                        onMethodChange={this.handleSortMethodChange}
                        onClick={this.onSort}
                    />
                </div>
            </div>
        );
    }
}

export default App;
