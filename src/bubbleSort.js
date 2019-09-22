
export const bubbleSort = (incomingData, incomingSortIndex, incomingSwapped) => {

    let data = incomingData;
    let sortIndex = incomingSortIndex;
    let swapped = incomingSwapped;

    let firstValue = data[sortIndex];
    let secondValue = data[sortIndex + 1];

    if (firstValue > secondValue) {
        swapped = true;
        data[sortIndex] = secondValue;
        data[sortIndex + 1] = firstValue;
        sortIndex++;
    }

    if (firstValue < secondValue) {
        sortIndex++;
    }

    if (sortIndex === data.length -1 && swapped) {
        sortIndex = 0;
        swapped = false;
    }

    return {
        newData: data,
        newSortIndex: sortIndex,
        newSwapped: swapped
    }
};
