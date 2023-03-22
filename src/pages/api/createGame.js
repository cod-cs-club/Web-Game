import gamesHandler from '/server/game.js'

export default function handler(req, res) {
  gamesHandler.createGame()
  const games = gamesHandler.games
  // res.redirect(`/game?id=${game.id}`)
  res.status(200).json(games)
}

