import { test, expect, describe } from "@jest/globals";
import { Player } from "./player.js";
import { Gameboard } from "./gameboard.js";

describe("player class", () => {

test("create player (real/computer)", () => {
  const realPlayer = new Player("Player"); 

  expect(realPlayer.type).toBe("Player");
  expect(realPlayer.board).toBeInstanceOf(Gameboard);
});

});