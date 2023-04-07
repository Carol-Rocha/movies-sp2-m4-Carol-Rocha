import { Request, Response } from "express"
import { client } from "./database"
import { QueryConfig, QueryResult } from "pg"
import { IMovie, TMovieRequest } from "./interfaces"

const createMovies = async (req: Request, res: Response): Promise<Response> => {
  const movieData: TMovieRequest = req.body

  const queryString: string = `
   INSERT INTO 
     movies 
     ("name", "category", "duration", "price")
   VALUES
     ($1, $2, $3, $4)
    RETURNING *;
   `
  const queryConfig: QueryConfig = {
    text: queryString,
    values: Object.values(movieData),
  }
  const queryResult: QueryResult<IMovie> = await client.query(queryConfig)
  console.log(queryConfig)
  return res.status(201).json(queryResult.rows[0])
}

export { createMovies }
