import { Player } from "../player.js";

export class GameController {
    constructor() {
        this.human = new Player("Player");
        this.computer = new Player("Computer");
        this.isGameOver = false;

        this.setupBoards();
    }

    setupBoards() {
        this.human.board.autoGenerateShips();
        this.computer.board.autoGenerateShips();
    }

    playRound(row, col) {
        if (this.isGameOver === true) {
            return;
        }
        console.log(`attack in row: ${row}, col: ${col}`);

        const result = this.computer.board.receiveAttack(row, col);

        if (result === "Already attacked") {
            return "invalid"; 
        }

        if (result === "hit") {
            console.log("It's a hit!");
        } else {
            console.log("Miss!");
        }

        if (this.computer.board.areAllShipsSunk()) {
            console.log("GAME OVER! You win!");
            this.isGameOver = true;
            return "game-over"; 
        }

        console.log("Turn over");
            
        return result; 
    }

    computerPlay() {
        let row, col, result;
        
        do {
            row = Math.floor(Math.random() * 10);
            col = Math.floor(Math.random() * 10);
            result = this.human.board.receiveAttack(row, col);
        } while (result === "Already attacked");

        if (this.human.board.areAllShipsSunk()) {
            console.log("GAME OVER! Computer wins!");
            this.isGameOver = true;
            return { row, col, result: "game-over" }; 
        }

        console.log(`comp attacked row: ${row}, col: ${col}. Result: ${result}`);
        
        return { row, col, result };
    }
}

export const game = new GameController();