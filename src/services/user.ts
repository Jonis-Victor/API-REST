import { IUsers, } from '../models/user'
import { User } from '../schemas/user'
export class userService {

  async createUser(data: IUsers) {
    try {
      const newUser = await User.create(data)
      return newUser

    } catch (error) {
      console.log(error)
    }
  }

  async getUsers() {
    try {
      const users = await User.find({})
      return users

    } catch (error) {
      console.log(error)
    }
  }

  async getUser(id: string) {

    try {
      const user = await User.findById({ _id: id })
      if (!user) {
        return 'user not available'
      }
      return user

    } catch (error) {
      console.log(error)
    }
  }

  async updateUser(id: string, data: IUsers) {
    try {
      const users = await User.findByIdAndUpdate({ _id: id }, data,)
      if (!users) {
        return "user not available"
      }
      return users
    } catch (error) {
      console.log(error)
    }
  }

  async deleteUser(id: string) {
    try {
      const user = await User.findByIdAndDelete(id)
      if (!user) {
        return 'user not available'
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const userServices = new userService()