const index = (i, j) => {
    if (i < 0 || j < 0 || i > cols - 1 || j > cols - 1) {
        return -1;
    }
    let index = i + j * cols;
    return index;
};

class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.walls = [true, true, true, true];//top, right, bottom, left
        this.visited = false;
    }

    checkNeighbors() {
        let neighbors = [];
        // let index = i + (j - 1) * cols;
        let top = grid[index(this.i, this.j - 1)];
        let right = grid[index(this.i + 1, this.j)];
        let bottom = grid[index(this.i, this.j + 1)];
        let left = grid[index(this.i - 1, this.j)];
        // console.log(index(this.i, this.j - 1))
        // noLoop();
        if (top && !top.visited) {
            neighbors.push(top);
        }
        if (right && !right.visited) {
            neighbors.push(right);
        }
        if (bottom && !bottom.visited) {
            neighbors.push(bottom);
        }
        if (left && !left.visited) {
            neighbors.push(left);
        }
        // console.log(neighbors.length)
        if (neighbors.length > 0) {
            let r = floor(random(0, neighbors.length));
            return neighbors[r];
        } else {
            return undefined;
        }
    }

    highlight(){
        let x = this.i * w;
        let y = this.j * w;
        noStroke()
        fill('blue')
        rect(x,y,w,w)
    }

    show() {
        let x = this.i * w;
        let y = this.j * w;
        stroke(255);

        if (this.walls[0]) {
            //top
            strokeWeight(3)
            line(x, y, x + w, y);
        }
        if (this.walls[1]) {
            //right
            strokeWeight(3)
            line(x + w, y, x + w, y + w);
        }
        if (this.walls[2]) {
            //bottom
            strokeWeight(3)
            line(x + w, y + w, x, y + w);
        }
        if (this.walls[3]) {
            //left
            strokeWeight(3)
            line(x, y + w, x, y);
        }
        if (this.visited) {
            noStroke()
            fill(255, 0, 0);
            rect(x, y, w, w);
        }
    }
}
