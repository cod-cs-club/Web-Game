import { useState } from 'react'

// Home (index) page
export default function Home() {
  const [section, setSection] = useState('Main-Menu')

  return (
    <div id="home">
      <h1>WEB GAME</h1>
      <main>
        { section === 'Main-Menu' &&
          
          <>
            <div class="extra-help">
              <button>?</button>
            </div>
            
            <div class="game-maker">
              <button onClick={() => setSection('Join-Game')}>Join Game</button>
              <button onClick={() => setSection('Create-Game')}>Create Game</button>
            </div>

            <div class="game-joiner">
              <input type="text" placeholder="Enter Code" />
              <button onClick={() => setSection('Join-Game')}>Join Game</button>
              <button onClick={() => setSection('Create-Game')}>Create Game</button>
            </div>
          </>

        }
        { section == 'Join-Game' &&
          <>
            <form>
              <label htmlFor="gameId">Join Game</label>
              <input type="text" id="gameId" />
            </form>
          </>
        }
        { section == 'Create-Game' &&
          <>
            <h2>create game thing</h2>
          </>
        }
      </main>
    </div>
  )
}

//<form>
    //<button>help</button>
//</form>
