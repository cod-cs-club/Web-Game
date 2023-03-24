import Game from './Game.js'

// The main class for handling all games
export default class GamesHandler {
  constructor() {
    this.games = []
  }

  createGame() {
    const game = new Game()
    this.games.push(game)
  }

  getGame(id) {
    return this.games.find(game => game.id === id);
  }

  removeGame(id) {
    this.games = this.games.filter(game => game.id !== id);
  }
}