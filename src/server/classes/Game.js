import gamesHandler from "../main.js"

// Each game is created with this class
export default class Game {
  constructor() {
    this.id = createRandomID()
    this.players = []
    this.state = 0
  }
}

// Create a random 4 letter ID for the game
function createRandomID() {
  let id = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  for (let i = 0; i < 4; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  // Check if the ID already exists
  if (gamesHandler.getGame(id)) {
    return createRandomID()
  }

  return id
}