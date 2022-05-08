import {Router} from "express"
import { createUser, getUsers, getUserById, updateUser, deleteUser } from "../controllers/user.controllers"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"

const router = Router()

router.get('/user', ensureAuthenticated, getUsers)
router.get('/user/:id', ensureAuthenticated, getUserById)
router.post('/user', createUser) //Não validar token
router.put('/user/:id', ensureAuthenticated, updateUser)
router.delete('/user/:id', ensureAuthenticated, deleteUser)

export default router