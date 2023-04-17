// Each player for games
export default class Player {
  constructor(username, game) {
    this.username = username
    this.game = game
    this.socket = null
    this.avatar = null
    this.isHost = false
    this.isConnected = false
  }

  setSocket(socket) {
    this.socket = socket
    this.isConnected = true

    // Set the socket events
    socket.on('disconnect', () => {
      this.leave()
      this.game.broadcastState()
    })

    this.game.broadcastState()
  }

  leave() {
    this.isConnected = false
    this.socket = null
    
    // If the player who is leaving is the host, choose a new host
    if (this.isHost == true) {
      this.isHost = false
      this.game.chooseNewHost()
    }
  }

  setAvatar(avatar) {
    this.avatar = avatar
  }

  setHost() {
    this.isHost = true
  }
}