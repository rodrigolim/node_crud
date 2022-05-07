import 'dotenv/config'
import { DataSource } from "typeorm";
import { User } from "./entities/User"

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.PGHOST,
  port: 5432,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  entities: [User],
  migrations: ["./databases/migrations/*.ts"],
  synchronize: true,
  logging: false,  
}); 

export default AppDataSource