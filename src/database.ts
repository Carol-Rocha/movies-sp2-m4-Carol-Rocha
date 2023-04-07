import { Client } from "pg"

const client: Client = new Client({
  user: "carol",
  host: "localhost",
  port: 5432,
  password: "260519",
  database: "locadora_de_filmes",
})

const startDataBase = async (): Promise<void> => {
  await client.connect()
  console.log("Database connected")
}

export { client, startDataBase }
