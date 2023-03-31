// Each player for games
export default class Player {
  constructor(username, gameID) {
    this.username = username
    this.socket = null
    this.avatar = null
    this.isHost = false
    this.connected = false
    this.gameID = gameID
  }

  setSocket(socket, game) {
    this.socket = socket
    this.connected = true

    // Set the socket events
    socket.on('disconnect', () => {
      this.leave()
      game.broadcastState()
    })

    game.broadcastState()
  }

  leave() {
    this.connected = false
    this.socket = null
  }

  setAvatar(avatar) {
    this.avatar = avatar
  }

  setHost() {
    this.isHost = true
  }

  leaveGame() {}
}