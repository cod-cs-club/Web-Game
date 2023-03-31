import { useEffect, useState } from 'react'

import io from 'socket.io-client'

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
      { game &&
        <>
          <h1>Game page</h1>
          <h2>
            ID: {game.id}<br />
            You are: {username}<br />
            Game State: {game.state}
          </h2>
          <h3>Players:</h3>
          { game.players.map(player => {
            return (
              <h4>{player.username} ({player.connected ? 'Connected' : 'Not connected'})</h4>
            )
          })}
        </>
      }
      { !game &&
        <h1>Game not found</h1>
      }
    </div>
  )
}

// Get the game based off the ?id= in the URL
export function getServerSideProps(context) {
  const { id, username } = context.query
  return ({
    props: { id, username }
  })
}