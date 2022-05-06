// @ts-check

import fs from "fs";

class Player {
  elo = 1000;
}
let players = {};

const gameFileContents = fs.readFileSync("games.txt", "utf-8");
gameFileContents.split("\n").forEach((line) => {
  console.log(line);
  parseMatchLine(line);
});
console.log(players);

function recordMatch(winner, loser) {
  const line = `${winner},${loser},${Date.now()}\n`;
  fs.appendFileSync("games.txt", line);
  parseMatchLine(line);
}

function parseMatchLine(line) {
  let parts = line.split(",");
  if (parts.length != 3) return;
  let winner = parts[0];
  let loser = parts[0];
  if (!players[winner]) players[winner] = new Player();
  if (!players[loser]) players[loser] = new Player();
  // calculate new elos here
}

export default {
  parseMatchLine,
  recordMatch,
};
