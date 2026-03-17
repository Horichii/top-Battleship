import { Gameboard } from "./gameboard.js";

export class Player {
    constructor(playerType) {
        this.type = playerType; 
        this.board = new Gameboard(); 
    }

    
}