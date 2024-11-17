import express from "express";
import { UserController } from '../controllers/userController'
export const userRouter = express.Router()

userRouter.post('/', UserController.adduser)

userRouter.get('/', UserController.getUsers)

userRouter.get('/:id', UserController.getAUser)

userRouter.put('/:id', UserController.updateUser)

userRouter.delete('/:id', UserController.deleteUser)