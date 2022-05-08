import express from "express"
import morgan from "morgan"
import cors from "cors"
import userRoutes from "./routes/user.routes"
import loginRoutes from "./routes/login.routes"

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use(userRoutes)
app.use(loginRoutes)

app.get('/', (req, res) => {
    res.status(200).send('API em funcionamento!')
})
  

export default app;