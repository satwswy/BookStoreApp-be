import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const server = express()
const port = process.env.PORT || 7001


server.use(cors())
server.use(express.json())

mongoose.connect(process.env.MONGO_CONNECTION_STRING)

mongoose.connection.on("connected", () => {
  console.log("Mongo Connected!")
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
  })
})