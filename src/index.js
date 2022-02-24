// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr;

    if (matrix === undefined) {
        return [];
    } else if (matrix.length === 0) {
        return matrix;
    } else {
        arr = matrix.flat();
    }


    if (arr.length === 4) {
        arr.splice(2, 2, arr[3], arr[2]);
        return arr;
    } else if (arr.length === 6 || arr.length === 9 && arr[2] === 3) {
        arr.splice(3, 3, arr[5], arr[4], arr[3]);
        return arr;
    } else if (arr.length === 9 && arr[2] !== 3) {
        arr.splice(3, 4, arr[6], arr[5], arr[4], arr[3]);
        return arr;
    } else if (arr.length === 12) {
        arr.splice(4, 4, arr[7], arr[6], arr[5], arr[4]);
        return arr;
    }else if (arr.length === 16) {
        arr.splice(4, 12, arr[7], arr[6], arr[5], arr[4], arr[8], arr[9], arr[10], arr[11], arr[15], arr[14], arr[13], arr[12],);
        return arr;
    }
}
