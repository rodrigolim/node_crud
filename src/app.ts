import express from "express"
import morgan from "morgan"
import cors from "cors"
import swaggerUi from "swagger-ui-express"
import swaggerDocs from "./swagger.json"

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

app.use('/docs',  swaggerUi.serve,  swaggerUi.setup(swaggerDocs));
  

export default app;