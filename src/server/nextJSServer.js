import next from 'next'
import { createServer } from 'http'
import { parse } from 'url'

// Next.js settings
const dev = process.env.PROJECT_MODE != 'production'
const hostname = process.env.WEB_HOST || 'localhost'
const port = process.env.WEB_PORT || 3000
const dir = '././src/'

// Create the Next.js server
export default async function nextJSServer(gamesHandler) {
  const app = next({ dev, hostname, port, dir })
  const handle = app.getRequestHandler()
  await app.prepare()

  // Create the web server
  const server = createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)

      // Custom API routes
      if (parsedUrl.pathname === '/createGame') {
        const username = parsedUrl.query.username
        const userValid = gamesHandler.checkUsername(username) //username check function
        console.log(userValid) 
        if(userValid.success == true){
          const newGame = gamesHandler.createGame() 
          newGame.addPlayer(username)
          res.statusCode = 302
          res.setHeader('Location', `/game?id=${newGame.id}&username=${username}`)
          res.end()
        } else{
          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(userValid))
        }
       

        
      }

      else if (parsedUrl.pathname === '/joinGame') {
        const username = parsedUrl.query.username
        const id = parsedUrl.query.id
        const game = gamesHandler.getGame(id)
        game.addPlayer(username)
        res.statusCode = 302
        res.setHeader('Location', `/game?id=${id}&username=${username}`)
        res.end()
      }

      // Default Next.js routing behavior
      else handle(req, res, parsedUrl)
    }
    catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error!')
    }
  })
  
  // Start the Next.js server
  server.listen(port, err => {
    if (err) throw err
    console.log(`Next.js web server listening on: http://${hostname}:${port}`.green)
  })

  return server // Return Next.js server object
}