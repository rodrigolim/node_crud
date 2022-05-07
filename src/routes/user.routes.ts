import {Router} from "express"
import { createUser, getUsers, getUserById, updateUser, deleteUser } from "../controllers/user.controllers"

const router = Router()

router.get('/user', getUsers)
router.get('/user/:id', getUserById)
router.post('/user', createUser)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)

export default router