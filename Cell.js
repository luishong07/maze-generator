class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.walls = [true, true, true, true];
    }

    show() {
        let x = this.i * w;
        let y = this.j * w;
        stroke(255);
        noFill();
        // rect(x,y,w,w)
        if (this.walls[0]) {//top
            line(x, y, x + w, y);
        }
        if (this.walls[1]) {//right
            line(x + w, y, x + w, y + w);
        }
        if (this.walls[2]) {//bottom
            line(x + w, y + w, x, y + w);
        }
        if (this.walls[3]) {//left
            line(x, y + w, x, y);
        }
    }
}
