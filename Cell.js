const index = (i, j) => {
    if (i < 0 || j < 0 || i > cols - 1 || j > cols - 1) {
        return -1;
    }
    let index = i + j * cols;
    return index;
};

class Cell {
    constructor(i, j, v) {
        this.i = i;
        this.j = j;
        this.walls = [true, true, true, true]; //top, right, bottom, left
        this.visited = false;
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
        // console.log(index(i,j)+1)
        this.v = v;
    }

    // checkNeighbors() {
    //     let neighbors = [];
    //     // let index = i + (j - 1) * cols;
    //     let top = grid[index(this.i, this.j - 1)];
    //     let right = grid[index(this.i + 1, this.j)];
    //     let bottom = grid[index(this.i, this.j + 1)];
    //     let left = grid[index(this.i - 1, this.j)];
    //     // console.log(index(this.i, this.j - 1))
    //     // noLoop();
    //     if (top && !top.visited) {
    //         neighbors.push(top);
    //     }
    //     if (right && !right.visited) {
    //         neighbors.push(right);
    //     }
    //     if (bottom && !bottom.visited) {
    //         neighbors.push(bottom);
    //     }
    //     if (left && !left.visited) {
    //         neighbors.push(left);
    //     }
    //     // console.log(neighbors.length)
    //     if (neighbors.length > 0) {
    //         let r = floor(random(0, neighbors.length));
    //         return neighbors[r];
    //     } else {
    //         return undefined;
    //     }
    // }

    checkNeighbors() {
        let neighbors = [];
        // let index = i + (j - 1) * cols;
        let top = grid[index(this.i, this.j - 1)];
        let right = grid[index(this.i + 1, this.j)];
        let bottom = grid[index(this.i, this.j + 1)];
        let left = grid[index(this.i - 1, this.j)];
        // console.log(index(this.i, this.j - 1))
        // noLoop();
        // console.log(this.i , this.j)
        // console.log(this.i, this.j)

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
            // let r = floor(random(0, neighbors.length));
            // console.log(this.v)
            return grid[this.v];
        } else {
            return undefined;
        }
    }

    step(){
        // console.log(grid[this.v].v)
        return grid[this.v]
    }

    highlight() {
        let x = this.i * w;
        let y = this.j * w;
        noStroke();
        fill("blue");
        rect(x, y, w, w);
        // console.log(stack.length == 0)
        if (stack.length == 0) {
            fill("red");
        }
        // noLoop()
    }

    show() {
        let x = this.i * w;
        let y = this.j * w;
        stroke(255);

        if (this.walls[0]) {
            //top
            strokeWeight(3);
            line(x, y, x + w, y);
        }
        if (this.walls[1]) {
            //right
            strokeWeight(3);
            line(x + w, y, x + w, y + w);
        }
        if (this.walls[2]) {
            //bottom
            strokeWeight(3);
            line(x + w, y + w, x, y + w);
        }
        if (this.walls[3]) {
            //left
            strokeWeight(3);
            line(x, y + w, x, y);
        }
        if (this.visited) {
            if(this.i == this.j){
                noStroke();
                fill(255,0,0)
                textSize(60);
                text(this.v, x + w / 2 - 20, y + w / 2 + 20);
                // noFill()
                ellipse(w/2)
            }else{

                noStroke();
                fill(this.r, this.g, this.b);
                // rect(x, y, w, w);
                textSize(40);
                text(this.v, x + w / 2 - 20, y + w / 2 + 20);
                // stroke('red')
                // point(x + w/2 - 20,y + w/2 +20)
            }
        }
        
    }
}
