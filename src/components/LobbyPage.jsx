// Lobby page, state = 0
export default function LobbyPage({ game }) {
  return (
    <div id="lobby-page">
      <h1>Game page</h1>
      <h2>
        ID: {game.id}<br />
        {/* You are: {username}<br /> */}
        Game State: {game.state}
      </h2>
      <h3>Players:</h3>
      { game.players.map(player => {
        return ( 
          <h4>
            <div class="box"></div>
            {/* Where the player profile drawing gets updated */}
            {player.username}
            ({player.connected ? 'Connected' : 'Not connected'})
            {player.isHost ? ' - HOST' : ''}
          </h4>
        )
      })}
    </div>
  )
}