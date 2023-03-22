// Each player for games
export default class Player {
  constructor(id, name, socket) {
    this.id = id
    this.name = name
    this.socket = socket
    this.avatar = null
    this.isHost = false
  }

  setAvatar(avatar) {
    this.avatar = avatar
  }

  setHost() {
    this.isHost = true
  }

  leaveGame() {}
}