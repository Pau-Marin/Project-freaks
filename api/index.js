const server = require("./src/server.js")
const { SERVER_PORT } = process.env

const DEFAULT_PORT = 3001

const { conn } = require("./src/db/db")

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(SERVER_PORT || DEFAULT_PORT, () => {
    console.log(`Server started on ${SERVER_PORT ? SERVER_PORT : DEFAULT_PORT}`)
  })
})
