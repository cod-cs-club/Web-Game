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
      if (game) {
        const player = game.getPlayer(username)
        player.setSocket(socket)
      }
      else {
        // Does nothing on frontend yet, todo.
        socket.emit('join-game-error', 'Game not found')
      }
    })
  })

  return io // Return the socket server object
}

// console.log(gamesHandler.games)
