import { Schema, model, } from 'mongoose'
import Joi from 'joi'
import { IUsers } from '../models/user'

export const UserschemaValidate = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  telephone: Joi.number().required(),
  admin: Joi.boolean().required(),

});

const userSchema = new Schema<IUsers>({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  telephone: {
    type: Number,
    required: true,
  },

  admin: {
    type: Boolean,
    required: true,
    default: false
  },
  

})

export const User = model<IUsers>('User', userSchema)