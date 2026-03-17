import { test, expect, describe } from "@jest/globals";
import { Gameboard } from "./gameboard.js";
import { Ship } from "./ship.js";

describe("Gameboard class", () => {
  test("create 10x10 gameboard", () => {
    const myBoard = new Gameboard();
    
    expect(myBoard.board.length).toBe(10);
    expect(myBoard.board[0].length).toBe(10);
  });

  test("places a ship horizontally at specific coordinates", () => {
    const myBoard = new Gameboard();
    const myShip = new Ship(3);

    myBoard.placeShip(myShip, 0, 0, "horizontal");

    expect(myBoard.board[0][0]).toBe(myShip);
    expect(myBoard.board[0][1]).toBe(myShip);
    expect(myBoard.board[0][2]).toBe(myShip);
    
    expect(myBoard.board[0][3]).toBeNull(); 
  });

    test("receive attack method hit", () => {
    const myBoard = new Gameboard();
    const myShip = new Ship(3);

    myBoard.placeShip(myShip, 0, 0, "horizontal");
    myBoard.receiveAttack(0, 1);

    expect(myShip.hitCount).toBe(1);
    
  });

    test("receive attack method miss", () => {
    const myBoard = new Gameboard();
    const myShip = new Ship(3);

    myBoard.placeShip(myShip, 0, 0, "horizontal");
    myBoard.receiveAttack(0, 4);

    expect(myBoard.board[0][4]).toBe("miss");
  });

    test("check if all ships sunk true", () => {
    const myBoard = new Gameboard();
    const myShip = new Ship(3);
    const myShipNoAttack = new Ship(3)

    myBoard.placeShip(myShip, 0, 0, "horizontal");
    myBoard.receiveAttack(0, 0);
    myBoard.receiveAttack(0, 1);
    myBoard.receiveAttack(0, 2);

    myBoard.placeShip(myShipNoAttack, 1, 0, "vertical")
    myBoard.receiveAttack(1, 0);
    myBoard.receiveAttack(2, 0);
    myBoard.receiveAttack(3, 0);

    expect(myBoard.areAllShipsSunk()).toBe(true);
  });

    test("check if all ships sunk false", () => {
    const myBoard = new Gameboard();
    const myShip = new Ship(3);
    const myShipNoAttack = new Ship(3)

    myBoard.placeShip(myShip, 0, 0, "horizontal");
    myBoard.receiveAttack(0, 0);
    myBoard.receiveAttack(0, 1);
    myBoard.receiveAttack(0, 2);

    myBoard.placeShip(myShipNoAttack, 1, 0, "vertical")
    myBoard.receiveAttack(1, 0);
    expect(myBoard.areAllShipsSunk()).toBe(false);
  });
});