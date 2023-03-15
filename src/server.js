// Creating a CUSTOM Next.js server, so we can use Next.js and
// web socket server at the same time without splitting the code.

import next from 'next'
import dotenv from 'dotenv'
import { createServer } from 'http'
import { parse } from 'url'
import { Server } from 'socket.io'
import 'colors'

// Load .env file
dotenv.config()

// Clean up console
console.clear()

// Next.js settings
const dev = process.env.PROJECT_MODE != 'production'
const hostname = process.env.WEB_HOST || 'localhost'
const port = process.env.WEB_PORT || 3000
const app = next({ dev, hostname, port, dir: './src/' })
const handle = app.getRequestHandler()

// Create the Next.js server
app.prepare().then(async () => {
  const server = createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      handle(req, res, parsedUrl)
    }
    catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error!')
    }
  })
  
  server.listen(port, err => {
    if (err) throw err
    console.log(`Next.js web server listening on: http://${hostname}:${port}`.green)
  })

  // Create the web socket server
  const io = new Server(server, {
    cors: { origin: '*' }
  })
})