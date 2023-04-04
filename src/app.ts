import express, { Application, Request, Response } from "express"

const app: Application = express()
app.use(express.json())

app.get("/movies", (req: Request, res: Response): Response => {
  return res.json()
})

const PORT: number = 3000
const runningMsg = `Server running on http://localhost:${PORT}`
app.listen(PORT, () => console.log(runningMsg))
