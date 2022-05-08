import {Router} from "express"
import { authenticator } from "../controllers/login.controllers"

const router = Router()

router.post('/login', authenticator)

export default router