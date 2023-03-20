const games = []

// Return the raw games array/list
export function getGamesArray() {
  return games
}

// Game states enums
export const gameStates = {
  LOBBY: 0,
  FILL_PROMPT: 1,
  DRAWING: 2,
  VOTING: 3,
  RESULTS: 4,
  END: 5
}