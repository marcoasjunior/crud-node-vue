import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import UserController from '../entities/User/UserController'
import { getUser } from '../middlewares/auth'
import { filterQuery } from '../middlewares/filterQuery'

const router = Router()

router.use(getUser)

router.get('/findAll', filterQuery, asyncHandler(UserController.findAll.bind(UserController)))
router.post('/', asyncHandler(UserController.create.bind(UserController)))
router.post('/login', asyncHandler(UserController.login.bind(UserController)))
router.patch('/:id', asyncHandler(UserController.update.bind(UserController)))

export default router