import { Server } from 'socket.io'

// Create the web socket server
export default async function socketServer(gamesHandler, nextServer) {
  const io = new Server(nextServer, {
    cors: { origin: '*' }
  })

  io.on('connection', socket => {
    socket.on('join-game', data => {
      const { id, username } = data
      const game = gamesHandler.getGame(id)
      const player = game.getPlayer(username)
      player.setSocket(socket)
      player.setConnected(true)
      // socket.join(id)
      console.log(game.players)
      socket.emit('joined-game', id, username)
    })

    socket.on('disconnect', () => {
      console.log('A user disconnected')
    })

    socket.on('test', () => {
      console.log('test')
      gamesHandler.createGame()
      console.log(gamesHandler.games)
    })
  })

  return io // Return the socket server object
}

// console.log(gamesHandler.games)
