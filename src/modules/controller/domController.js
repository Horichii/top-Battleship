import { game } from './gameController.js';
// window.game = game;

export const randomizeButton = () => {
    const randomizer = document.querySelector("#randomize-btn");
    
    randomizer.addEventListener("click", () => {
        game.setupBoards(); 
        renderBoard("player-board"); 
        renderBoard("computer-board"); 
    });
};

export const renderBoard = (containerId) => {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; 

    const isEnemyBoard = containerId === "computer-board";

    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            
            cell.dataset.row = row;
            cell.dataset.col = col;

        if (containerId === "player-board") {
            const cellValue = game.human.board.board[row][col];
            if (typeof cellValue === "object" && cellValue !== null) {
                cell.classList.add("ship");
            }
        }

        if (isEnemyBoard) {
            cell.addEventListener("click", (e) => {
            const cellEl = e.currentTarget;

            const turnResult = game.playRound(row, col);

            switch (turnResult) {
                case "hit":
                case "miss":
                    cellEl.classList.add(turnResult);
                    break;
                case "game-over":
                    cellEl.classList.add("hit");
                    document.getElementById("computer-board").style.pointerEvents = "none";
                    alert("Game over! player WINS!");
                return;
            }

            //comp
            if (turnResult === "hit" || turnResult === "miss") {
                const compMove = game.computerPlay();
                        
                const playerBoard = document.getElementById("player-board");
                const targetCell = playerBoard.querySelector(`[data-row="${compMove.row}"][data-col="${compMove.col}"]`);

                if (compMove.result === "hit" || compMove.result === "miss" || compMove.result === "game-over") {
                    if (compMove.result === "game-over") {
                        targetCell.classList.add("hit");
                    } else {
                    targetCell.classList.add(compMove.result);
                    }
                targetCell.style.pointerEvents = "none";
                }

                if (compMove.result === "game-over") {
                    document.getElementById("computer-board").style.pointerEvents = "none";
                    alert("Game over! comp WINS!");
                }
            }
            });
        }

            container.appendChild(cell);
        }
    }
};