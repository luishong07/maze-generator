let rows = 5;
let columns = 5;
let matrix = [];

for (let i = 0; i < rows; i++) {
    matrix.push([]);
}

// let arr = [
//     1, 2, 3, 4, 5, 6,
//     7, 8, 9, 10, 11, 12,
//     13, 14, 15, 16, 17, 18,
//     19, 20, 21, 22, 23, 24, 25
// ]

let totalCount = rows * columns;
let arr = [];
for (let i = totalCount; i >= 1; i--) {
    arr.push(i);
}
// console.log(arr);
//function copied from geeks for geeks

function MatrixToSpiral(arr, mat) {
    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = columns - 1;

    let index = 0;

    // console.log(mat)
    while (true) {
        // console.log(mat)

        if (left > right) break;
        //top row
        for (let i = left; i <= right; i++) {
            mat[top][i] = arr[index++];
            console.log("first loop", mat[top][i], top, i);
        }
        top++;

        if (top > bottom) break;
        //right column
        for (let i = top; i <= bottom; i++) {
            mat[i][right] = arr[index++];
            console.log("second loop", mat[i][right], i, right);
        }
        right--;

        if (left > right) break;
        //bottom row
        for (let i = right; i >= left; i--) {
            mat[bottom][i] = arr[index++];
            console.log("third loop", mat[bottom][i], bottom, i);
        }
        bottom--;

        if (top > bottom) break;
        //left column
        for (let i = bottom; i >= top; i--) {
            mat[i][left] = arr[index++];
            console.log("fourth loop", mat[i][left], i, left);
        }
        left++;
    }
    // console.log(mat)
}
// MatrixToSpiral(arr, matrix)

const spiralIndexes = () => {
    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = columns - 1;

    let index = 0;
    let result = []
    while (true) {
        if (left > right) break;

        for (let i = left; i <= right; i++) {
            // console.log(top, i);
            result.push([top,i])
        }
        top++;

        if (top > bottom) break;

        for (let i = top; i <= bottom; i++) {
            // console.log(i, right);
            result.push([i,right])
        }

        right--;
        if (left > right) break;

        for (let i = right; i >= left; i--) {
            // console.log(bottom, i);
            result.push([bottom, i])
        }
        bottom--;

        if (top > bottom) break;
        for (let i = bottom; i >= top; i--) {
            // console.log(i, left);
            result.push([i, left])
        }
        left++;
    }
    return result
};
console.log(spiralIndexes().reverse())
