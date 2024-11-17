
import { userServices } from '../services/user'
import { Request, Response } from 'express'
import { UserschemaValidate } from '../schemas/user'

class userController {
  adduser = async (req: Request, res: Response) => {
    const data = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      telephone: req.body.telephone,
      admin: req.body.admin
    }
    const { error, value } = UserschemaValidate.validate(data)

    if (error) {
      res.send(error.message)

    } else {
      const user = await userServices.createUser(value)
      res.status(201).send(user)
    }

  }

  getUsers = async (req: Request, res: Response) => {
    const users = await userServices.getUsers()
    res.send(users)
  }

  getAUser = async (req: Request, res: Response) => {
    //get id from the parameter
    const id = req.params.id
    const user = await userServices.getUser(id)
    res.send(user)
  }

  updateUser = async (req: Request, res: Response) => {
    const id = req.params.id
    const user = await userServices.updateUser(id, req.body)
    res.send(user)
  }

  deleteUser = async (req: Request, res: Response) => {
    const id = req.params.id
    await userServices.deleteUser(id)
    res.send('user deleted')
  }

}

export const UserController = new userController()