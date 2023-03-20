import createGame from '/functions/server/CreateGame'

export default function handler(req, res) {
  const game = createGame()
  res.redirect(`/game?id=${game.id}`)
  // res.status(200).json(games)
}

