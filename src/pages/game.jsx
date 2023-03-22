import { useEffect, useState } from 'react'

import io from 'socket.io-client'
const socket = io()

// Main game page
export default function Game() {
  const [game, setGame] = useState(null)

  useEffect(() => {
    socket.on('game-data', game => {
      setGame(game)
    })
  }, [])

  return (
    <div id="game">
      { game &&
        <>
          <h1>Game page</h1>
          <h2>ID: {game.id}</h2>
          <h3>Players:</h3>
          { game.players.map(player => {
            return (
              <h4>{player.name} ({player.id})</h4>
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
import getGame from '/functions/server/getGame'
export function getServerSideProps(context) {
  const game = getGame(context.query.id)
  console.log(context.query)
  console.log(game)
  if (game) { // Game exists
    return ({
      props: {
        game: game
      }
    })
  }
  else { // Game doesn't exist
    return ({
      props: {
        game: null
      }
    })
  }
}