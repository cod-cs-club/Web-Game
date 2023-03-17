import { createGame, getGames } from '/functions/game'

export default function handler(req, res) {
  createGame()
  const games = getGames()
  res.status(200).json(games)
}