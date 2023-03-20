// Main game page
export default function Game({ game }) {
  return (
    <div id="game">
      { game &&
        <>
          <h1>Game page</h1>
          <h2>ID: {game.id}</h2>
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