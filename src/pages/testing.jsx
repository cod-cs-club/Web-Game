import LobbyPage from '/components/LobbyPage'
import WritePromptPage from '/components/WritePromptPage'
import DrawPromptPage from '/components/DrawPromptPage'

// Testing page for different components
export default function Testing({ state }) {
  return (
    <>
      { !state && <h1>No state ID given.</h1> }
      { state == 0 && <LobbyPage game={lobbyPageFakeGame} /> }
      { state == 1 && <WritePromptPage game={writePromptPageFakeGame} /> }
      { state == 2 && <DrawPromptPage game={drawPromptPageFakeGame} /> }
    </>
  )
}

// Fake game data
const genericFakeGame = {
  id: 'ABCD',
  players: [
    { username: 'Player 1', isHost: true, isConnected: true },
    { username: 'Player 2', isHost: false, isConnected: true },
    { username: 'Player 3', isHost: false, isConnected: true },
    { username: 'Player 4', isHost: false, isConnected: true }
  ]
}

const lobbyPageFakeGame = {
  ...genericFakeGame,
  state: 0
}

const writePromptPageFakeGame = {
  ...genericFakeGame,
  state: 1
}

const drawPromptPageFakeGame = {
  ...genericFakeGame,
  state: 2
}

// Get the state based off the ?state= in the URL
export function getServerSideProps(context) {
  const state = context.query.state || null
  return ({ props: { state } })
}