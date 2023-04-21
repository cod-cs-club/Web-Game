import Game from './Game.js'

// The main class for handling all games
export default class GamesHandler {
  constructor() {
    this.games = []
  }

  createGame() {
    const game = new Game()
    this.games.push(game)
    return game
  }

  getGame(id) {
    return this.games.find(game => game.id === id)
  }

  removeGame(id) {
    this.games = this.games.filter(game => game.id !== id)
  }

  checkUsername(username){
    if (username.length < 3){
      //username is shorter than 3 characters
      return {
        success: false,
        error: 'Your name is shorter than 3 characters',
      }
    }
    else if(username.length > 10){
      //username is longer than # characters
      return{
        success: false,
        error: 'Your name is longer than 10 characters',
      } 
    }

    const legalCharacters = "abcdefghijklmnopqrstuvwxyz0123456789_".split("")
    let legalCharactersLength = legalCharacters.length
    
    console.log(legalCharactersLength)
    
    let usernameLength = username.length
    console.log(usernameLength)
    console.log(legalCharacters)

    let failed = false;
    
    for  (let i = 0; i < usernameLength; i++)
      if (!username.includes(legalCharacters))
        return{
          success: false,
          error: "Special char"
        }

      else{
        return{
          success: true,
          error: null,
        }
        }
    return{
      success: true,
      error: null,
    }


  }

}