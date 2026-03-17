import { test, expect, describe } from "@jest/globals";
import { Ship } from "./ship.js"

describe("Ship class", () => {

test("create ship with correct length and default properties", () => {
    
  const testShip = new Ship(3); 
    expect(testShip.length).toBe(3);
    expect(testShip.hitCount).toBe(0);
    expect(testShip.shipStatus).toBe(false);
  });

  test("hit() method increments", () => {

    const myShip = new Ship(3);
    
    myShip.hit();
    myShip.hit();
    expect(myShip.hitCount).toBe(2);
  });

    test("isSunk() method triggers true", () => {
    
    const myShip = new Ship(1);
    
    myShip.hit();    
    expect(myShip.isSunk()).toBe(true);
  });

      test("isSunk() method triggers false", () => {
    
    const myShip = new Ship(1);
      
    expect(myShip.isSunk()).toBe(false);
  });

});
