// Each player for games
export default class Player {
  constructor(username) {
    this.username = username
    this.socket = null
    this.avatar = null
    this.isHost = false
    this.connected = false
  }

  setSocket(socket) {
    this.socket = socket
  }

  setConnected(boolean) {
    this.connected = boolean
  }

  setAvatar(avatar) {
    this.avatar = avatar
  }

  setHost() {
    this.isHost = true
  }

  leaveGame() {}
}