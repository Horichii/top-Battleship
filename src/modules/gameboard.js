import { Ship } from "./ship.js";

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
            return "miss";
        } else if (this.board[row][col] === "miss" || this.board[row][col] === "hit") { 
            return "Already attacked";
        } else { //ship hit
            this.board[row][col].hit();
            this.board[row][col] = "hit"; 
            return "hit";
        }
    }

    areAllShipsSunk() {
        // console.log("array ships: ", this.ships);
        for(let i = 0; i < this.ships.length; i++) {
            this.ships[i].isSunk();
            if (this.ships[i].isSunk() === false) {
                return false;
            }
        }
        return true;
    }

    autoGenerateShips() {
        this.board = [];
        this.ships = [];
        for (let i = 0; i < 10; i++) {
            this.board.push(new Array(10).fill(null));
        }

        const shipLengths = [5, 4, 3, 2, 1];

        for (let i = 0; i < shipLengths.length; i++){
            let length = shipLengths[i];
            let isPlaced = false;

            while (isPlaced === false) {
                const row = Math.floor(Math.random() * 10);
                const col = Math.floor(Math.random() * 10);

                let direction;
                if (Math.random() > 0.5) {
                    direction = "horizontal";
                } else {
                    direction = "vertical";
                }

                if (this.isValidPlace(length, row, col, direction)) {
                    this.placeShip(new Ship(length), row, col, direction);
                    isPlaced = true;
                }
            }
        }
    }

    isValidPlace(length, row, col, direction) {
        if (direction === "horizontal") {
            
            if (col + length > 10) return false; 
            
            
            for (let i = 0; i < length; i++) {
                if (this.board[row][col + i] !== null) {
                    return false;
                }
            }
        } else if (direction === "vertical") {
            
            if (row + length > 10) {
                return false;
            }
            
            
            for (let i = 0; i < length; i++) {
                if (this.board[row + i][col] !== null) {
                    return false; 
                }
            }
        }
        return true; 
    }
}