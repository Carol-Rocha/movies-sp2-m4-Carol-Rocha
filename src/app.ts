import express, { Application } from "express"
import { startDataBase } from "./database"
import {
  createMovies,
  deleteMovie,
  listMovieById,
  listMovies,
  updateMovie,
} from "./logic"
import { checkMovieIdExistsMiddleware } from "./middlewares"

const app: Application = express()
app.use(express.json())

app.post("/movies", createMovies)
app.get("/movies", listMovies)
app.get("/movies/:id", checkMovieIdExistsMiddleware, listMovieById)
app.patch("/movies/:id", checkMovieIdExistsMiddleware, updateMovie)
app.delete("/movies/:id", checkMovieIdExistsMiddleware, deleteMovie)

const PORT: number = 3000
const runningMsg = `Server running on http://localhost:${PORT}`
app.listen(PORT, async () => {
  await startDataBase()
  console.log(runningMsg)
})
