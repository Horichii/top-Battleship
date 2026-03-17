export class Ship {
    constructor(length) {
        this.length = length;
        this.hitCount = 0;
        this.shipStatus = false;
    }

    hit() {
        this.hitCount++
    }

    isSunk() {
        if (this.hitCount === this.length) {
            this.shipStatus = true;
        } 
        return this.shipStatus;
    }

}