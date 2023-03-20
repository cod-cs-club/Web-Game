import { getGamesArray, gameStates } from '/functions/server/main'

// Create a new game and return it
export default function createGame() {
  const games = getGamesArray()
  const game = {
    id: `${games.length}`,
    name: 'Awesome game',
    players: [],
    state: gameStates.LOBBY
  }
  games.push(game)
  console.log(games)
  return game
}