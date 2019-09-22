
export const insertionSort = (incomingData, incomingSortIndex, incomingInnerIndex) => {

    let data = incomingData;
    let sortIndex = incomingSortIndex;
    let innerIndex = incomingInnerIndex;

    const el = data[sortIndex];

    let j;
    for (j = sortIndex - 1; j >= 0 && data[j] > el; j--) {
        data[j + 1] = data[j];
        innerIndex++;
    }

    data[j + 1] = el;

    sortIndex++;

    return {
        newData: data,
        newSortIndex: sortIndex,
        newInnerIndex: innerIndex
    }

};

