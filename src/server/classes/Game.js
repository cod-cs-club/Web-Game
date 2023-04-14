import gamesHandler from "../main.js"
import Player from "./Player.js"

// Each game is created with this class
export default class Game {
  constructor() {
    this.id = createRandomID()
    this.players = []
    this.state = 0
  }

  addPlayer(username) {
    const player = new Player(username, this)
    this.players.push(player)
    
    // If player if the first player, make them the host
    if (this.players.length === 1) {
      player.setHost()
    }
    
    return player
  }

  getPlayer(username) {
    return this.players.find(player => player.username === username)
  }

  // Send current game state to all players
  broadcastState() {
    console.log('Broadcasting game state...')
    const data = {
      id: this.id,
      players: this.players.map(player => {
        return {
          username: player.username,
          avatar: player.avatar,
          isHost: player.isHost,
          isConnected: player.isConnected
        }
      }),
      state: this.state
    }

    // Send the game state to all player sockets
    this.players.forEach(player => {
      if (player.socket) {
        player.socket.emit('game-data', data)
      }
    })
  }

  // Assign a random player as the host
  chooseNewHost() {
    const connectedPlayers = []
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].isConnected == true) {
        connectedPlayers.push(this.players[i])
      }
    }
    const randomPlayer = connectedPlayers[Math.floor(Math.random() * connectedPlayers.length)]
    if (randomPlayer) {
      randomPlayer.setHost()
      this.broadcastState()
    }
  }
}

// Create a random 4 letter ID
function createRandomID() {
  let id = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  for (let i = 0; i < 4; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  // If the ID already exists, create a new one
  if (gamesHandler.getGame(id)) {
    return createRandomID()
  }

  return id
}