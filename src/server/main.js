import dotenv from 'dotenv'
import 'colors'

import GamesHandler from './classes/GamesHandler.js'
import nextJSServer from './nextJSServer.js'
import socketServer from './socketServer.js'

// Load .env file
dotenv.config()

// Clean up console
console.clear()
console.log('Starting server...'.gray)

// Create the games handler object
const gamesHandler = new GamesHandler()

// Start the Next.js & web socket servers
const nextServer = await nextJSServer(gamesHandler)
const socket = await socketServer(gamesHandler, nextServer)

// Export the games handler object to be used by other modules/classes
export default gamesHandler