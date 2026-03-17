export class Gameboard {
    constructor() {
        this.board = [];
        this.ships = [];

        for (let i = 0; i < 10; i++) {
            const row = new Array(10).fill(null);
            this.board.push(row);
        }
    }

    placeShip(ship, row, col, direction) {

        if (direction === "vertical") {
            for (let i = 0; i < ship.length; i++) {
                this.board[row + i][col] = ship;
            }
        } else if (direction === "horizontal") {
            for(let i = 0; i < ship.length; i++) {
                this.board[row][col+i] = ship;
            }
        }
        this.ships.push(ship);
     
    }

    receiveAttack(row, col) {

        if (this.board[row][col] === null) { //miss
            this.board[row][col] = "miss";
        } else if (this.board[row][col] === "miss") { //already marked miss
            return;
        } else { //ship hit
            this.board[row][col].hit();
        }
    }

    areAllShipsSunk() {
        for(let i = 0; i < this.ships.length; i++) {
            this.ships[i].isSunk();
            if (this.ships[i].isSunk() === false) {
                return false;
            }
        }
        return true;
    }
}