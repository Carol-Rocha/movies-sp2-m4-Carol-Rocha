import express, { Application, Request, Response } from "express"
import { startDataBase } from "./database"
import { createMovies } from "./logic"

const app: Application = express()
app.use(express.json())

app.post("/movies", createMovies)

const PORT: number = 3000
const runningMsg = `Server running on http://localhost:${PORT}`
app.listen(PORT, async () => {
  await startDataBase()
  console.log(runningMsg)
})
