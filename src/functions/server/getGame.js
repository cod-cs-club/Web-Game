import { getGamesArray } from '/functions/server/main'

// Find and return the game object with the given id,
// if the game does not exist, return undefined.
export default function getGame(id) {
  const games = getGamesArray()
  const game = games.find(f => f.id == id)
  console.log('games', games)
  return game
}