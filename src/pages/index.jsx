import { useState } from 'react'
import { useRouter } from 'next/navigation'

// Home (index) page
export default function Home() {
  const [section, setSection] = useState('Main-Menu')
  const [username, setUsername] = useState('')
  const [gameCode, setGameCode] = useState('')

  const router = useRouter()

  // Join game when you submit the join game form
  async function joinGame(event) {
    event.preventDefault()
    const result = await fetch(`/joinGame?id=${gameCode}&username=${username}`)
    
    if (result.url) router.push(result.url) // Redirect to the game page

    // const { error } = result.json()
    // if (error) {} // do something later
  }

  // Create then join the game when you submit the create game form
  async function createGame(event) {
    event.preventDefault()
    const result = await fetch(`/createGame?username=${username}`)
    
    if (result.url) router.push(result.url) // Redirect to the game page

    // const { error } = result.json()
    // if (error) {} // do something later
  }

  return (
    <div id="home">
      <h1>WEB GAME</h1>
      <main>
        <div id="scenes" className={section == 'Main-Menu' ? 'middle' : section == 'Join-Game' ? 'left' : 'right'}>
          <form onSubmit={joinGame} className='join-game-form'>
            <label htmlFor="game-username"><h3>Username</h3></label>
            <input type="text" id="game-username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="game-code"><h3>Game Code</h3></label>
            <input type="text" id="game-code" value={gameCode} onChange={(e) => setGameCode(e.target.value)} />
            <button type="submit">Join Game</button>
          </form>

          <div className="game-maker">
            <button onClick={() => setSection('Join-Game')}>Join Game</button>
            <button onClick={() => setSection('Create-Game')}>Create Game</button>
          </div>

          <form onSubmit={createGame} className='create-game-form'>
            <label htmlFor="game-username">Username</label>
            <input type="text" id="game-username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button type="submit">Create Game</button>
          </form>
        </div>

        <button
          id='backButton'
          className={section != 'Main-Menu' ? 'visible' : ''}
          onClick={() => setSection('Main-Menu')}
        >←</button>
      </main>
    </div>
  )
}
