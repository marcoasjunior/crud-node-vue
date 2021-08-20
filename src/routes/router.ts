import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import UserController from '../entities/User/UserController'

const router = Router()

router.get('/', asyncHandler(UserController.findAll.bind(UserController)))
router.post('/', asyncHandler(UserController.login.bind(UserController)))
router.post('/', asyncHandler(UserController.create.bind(UserController)))
router.patch('/:id', asyncHandler(UserController.update.bind(UserController)))

export default router