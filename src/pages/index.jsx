import { useState } from 'react'

// Home (index) page
export default function Home() {
  const [section, setSection] = useState(0)

  return (
    <div id="home">
      <h1>WEB GAME</h1>
      <main>
        { section === 0 &&
          <>
            <button onClick={() => setSection(1)}>Join Game</button>
            <button onClick={() => setSection(2)}>Create Game</button>
          </>
        }
        { section == 1 &&
          <>
            <form>
              <label htmlFor="gameId">Join Game</label>
              <input type="text" id="gameId" />
            </form>
          </>
        }
        { section == 2 &&
          <>
            <h2>create game thing</h2>
          </>
        }
      </main>
    </div>
  )
}