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
      if (parsedUrl.pathname === '/api/createGame') {
        const { username } = res.body
        const newGame = gamesHandler.createGame()
        res.redirect(`/game?id=${newGame.id}`)
        res.statusCode = 200
        res.end('test api!')
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