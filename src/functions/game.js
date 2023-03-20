const games = []

const game = {
  states: {
    LOBBY: 0,
    FILL_PROMPT: 1,
    DRAWING: 2,
    VOTING: 3,
    RESULTS: 4,
    END: 5
  }
}

export function createGame () {
  games.push({
    id: games.length,
    name: 'Awesome game',
    players: []
  })
}

games.getGames = () => {
  return games
}

games.createGame = createGame
// games.getGames = getGames