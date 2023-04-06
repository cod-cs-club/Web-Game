import LobbyPage from '/components/LobbyPage'
import WritePromptPage from '/components/WritePromptPage'
import DrawPromptPage from '/components/DrawPromptPage'

import io from 'socket.io-client'
import { useEffect, useState } from 'react'

// Main game page
export default function Game({ id, username }) {
  const [game, setGame] = useState(null)
  
  useEffect(() => {
    const socket = io()

    socket.on('connect', () => {
      socket.emit('join-game', { id, username })
    })

    socket.on('game-data', data => {
      setGame(data)
    })
  }, [])

  return (
    <div id="game">
      { game?.state == 0 && <LobbyPage game={game} /> }
      { game?.state == 1 && <WritePromptPage game={game} /> }
      { game?.state == 2 && <DrawPromptPage game={game} /> }
      { !game &&
        <h1>Game not found</h1>
      }
    </div>
  )
}

// Get the game based off the ?id= in the URL
export function getServerSideProps(context) {
  const { id, username } = context.query
  return ({ props: { id, username } })
}