let cols;
let rows;

let w = 200;
let grid = [];
let current;
let stack = [];

const spiralIndexes = () => {
    let top = 0;
    let bottom = 5 - 1;
    let left = 0;
    let right = 5 - 1;

    // let index = 0;
    let result = [];
    while (true) {
        if (left > right) break;

        for (let i = left; i <= right; i++) {
            // console.log(top, i);
            result.push([top, i]);
        }
        top++;

        if (top > bottom) break;

        for (let i = top; i <= bottom; i++) {
            // console.log(i, right);
            result.push([i, right]);
        }

        right--;
        if (left > right) break;

        for (let i = right; i >= left; i--) {
            // console.log(bottom, i);
            result.push([bottom, i]);
        }
        bottom--;

        if (top > bottom) break;
        for (let i = bottom; i >= top; i--) {
            // console.log(i, left);
            result.push([i, left]);
        }
        left++;
    }
    return result;
};

function setup() {
    // createCanvas(800, 800);
    createCanvas(1000, 1000);
    // put setup code here
    cols = width / w;
    rows = height / w;
    frameRate(5)
    // for (let j = 0; j < rows; j++) {
    //     for (let i = 0; i < cols; i++) {
    //         let cell = new Cell(i, j,v);
    //         grid.push(cell);
    //     }
    // }

    // current = grid[0];
    // console.log(grid)

    let indexArray = spiralIndexes().reverse();
    for (let i = 0; i < indexArray.length; i++) {
        let row = indexArray[i][0]
        let col = indexArray[i][1]
        let cell = new Cell(row, col,i+1)
        grid.push(cell)
    }
    current = grid[0]
    // console.log(grid)
}

function draw() {
    // put drawing code here

    background(60);
    for (let i = 0; i < grid.length; i++) {
        grid[i].show();
    }
    current.visited = true;
    // current.highlight();
    // let next = current.checkNeighbors();
    let next = current.step()
    // console.log(next)
    current.step()
    if (next) {
        next.visited = true;
        stack.push(current);
        // removeWall(current, next);
        current = next;
    } else if (stack.length > 0) {
        current = stack.pop();
    }
}

const removeWall = (a, b) => {
    // console.log("hhmmm")
    let x = a.i - b.i;
    if (x == 1) {
        a.walls[3] = false;
        b.walls[1] = false;
    } else if (x == -1) {
        a.walls[1] = false;
        b.walls[3] = false;
    }
    let y = a.j - b.j;
    if (y == 1) {
        a.walls[0] = false;
        b.walls[2] = false;
    } else if (y == -1) {
        a.walls[2] = false;
        b.walls[0] = false;
    }
};
