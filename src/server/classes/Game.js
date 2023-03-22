import gamesHandler from "../main.js"

// Each game is created with this class
export default class Game {
  constructor() {
    this.id = gamesHandler.games.length + 1
    this.players = []
    this.state = 0
  }
}