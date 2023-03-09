let cols;
let rows;

let w = 40;
let grid = [];
let current;

function setup() {
    createCanvas(400, 400);
    // put setup code here
    cols = width / w;
    rows = height / w;
    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
            let cell = new Cell(i, j);
            grid.push(cell);
        }
    }
    current = grid[0];
}

function draw() {
    // put drawing code here

    background(60);
    for (let i = 0; i < grid.length; i++) {
        grid[i].show();

    }
    current.visited = true;
	current.highlight()
    let next = current.checkNeighbors();
    // console.log(next)
    if (next) {
        next.visited = true;
        removeWall(current, next);
        current = next;
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
