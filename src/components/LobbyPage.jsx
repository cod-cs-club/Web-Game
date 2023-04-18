// Lobby page, state = 0
export default function LobbyPage({ game }) {
  return (
    <div id="lobby-page">
      
      <h1>Game page
      ID: {game.id}</h1>

      <h2>
        {/* You are: {username}<br /> */}
        <p>Game State: {game.state}</p>
      </h2>
      
      <h3>
        Players: 
      </h3>

      { game.players.map(player => {
        return ( 
          <h4>
            <div class="box"></div>
            {/* Where the player profile drawing gets updated */}
            {player.username}
            ({player.isConnected ? 'Connected' : 'Not connected'})
            {player.isHost ? ' - HOST' : ''}
          </h4>
        )
      })}
    </div>
  )
}