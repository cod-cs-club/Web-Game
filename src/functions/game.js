const games = []

export function createGame () {
  games.push({
    id: games.length,
    name: 'Awesome game',
    players: []
  })
}

export function getGames() {
  return games
}