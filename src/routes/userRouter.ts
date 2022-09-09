import { Router } from 'express'
import UserController from '../controllers/User'

const userController = new UserController()

const router = Router()

router.post('/user', (req, res) => userController.add(req, res))

export default router
