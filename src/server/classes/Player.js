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
  }

  leave() {
    this.connected = false
    this.socket = null
    
    //take this player name off of the currentPlayers list
    for(let i = 0; i < this.game.currentPlayers.length; i++){
      if(this.game.currentPlayers[i].username.equals(this.username)){ //iterates throughout the current player array, and removes 
        currentPlayers.remove[i]
      }
    }

    if(this.isHost == true){ //if leaving player is host, reassigns host to another player
      this.isHost = false
      chooseNewHost()
   }
   //game.broadcastState()
  }

  setAvatar(avatar) {
    this.avatar = avatar
  }

  setHost() {
    this.isHost = true
  }

  leaveGame() {}

  chooseNewHost(){
    //x = Math.floor(Math.random() * (game.currentPlayers.length + 1)) //added 1 to include last entry in array
    this.Players(x => {
      if(x.connected == true){
        x.setHost();
      }
    })
    game.broadcastState()
  }
}