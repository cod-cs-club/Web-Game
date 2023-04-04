import gamesHandler from "../main.js"
import Player from "./Player.js"

// Each game is created with this class
export default class Game {
  constructor() {
    this.id = createRandomID()
    this.players = []
    this.currentPlayers = []
    this.state = 0
    this.checkHost = false //initialize a boolean for whether or not there is a host in the game
  }

  addPlayer(username) {
    const player = new Player(username, this.id)
    this.players.push(player)
    this.currentPlayers.push(player)
    for(let i=0; i < this.players.length; i++){  //iterates throuhgout the entire array, and checks to see if there is a host or not
      if (this.players[i].isHost = true){
        this.checkHost = true
      }
    }
    if(this.checkHost = false){ //if there is no host, then this player is the host
      player.setHost
    }
    return player
  }

  getPlayer(username) {
    return this.players.find(player => player.username === username)
  }

  // Send current game state to all players
  broadcastState() {
    const data = {
      id: this.id,
      players: this.players.map(player => {
        return {
          username: player.username,
          avatar: player.avatar,
          isHost: player.isHost,
          connected: player.connected
        }
      }),
      state: this.state
    }

    // Send the game state to all player sockets
    this.players.forEach(player => {
      player.socket.emit('game-data', data)
    })
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