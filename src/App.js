import React, {Component} from 'react';

import ShowArea from "./ShowArea";
import SettingArea from "./SettingArea";

import {bubbleSort} from "./bubbleSort";

import "./App.css";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            executeSort: false,
            data: [],
            sortIndex: 0,
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

    render() {
        const {data, rangeSlider} = this.state;
        return (
            <div className="container">
                <div className="show-area">
                    <ShowArea
                        data={data}
                    />
                </div>
                <div className="setting-area">
                    <SettingArea
                        rangeSlider={this.state.rangeSlider}
                        onRangeChange={this.handleRangeSlider}
                        onClick={this.handleBubbleSort}
                    />
                </div>
            </div>
        );
    }
}

export default App;
