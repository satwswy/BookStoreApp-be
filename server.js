import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import { unauthorizedErrorHandler, forbiddenErrorHandler,notFoundErrorHandler, genericErroHandler  } from "./errorHandlers/errorHandlers.js"
import booksRouter from "./routes/books.js"


const server = express()
const port = process.env.PORT || 7001


server.use(cors())
server.use(express.json())

server.use("/books",booksRouter)

server.use(unauthorizedErrorHandler)
server.use(forbiddenErrorHandler)
server.use(notFoundErrorHandler)
server.use(genericErroHandler)

mongoose.connect(process.env.MONGO_CONNECTION_STRING)

mongoose.connection.on("connected", () => {
  console.log("Mongo Connected!")
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
  })
})