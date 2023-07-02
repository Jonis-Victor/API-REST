import express from "express";
import { PostController } from '../controllers/postController'
export const router = express.Router()

router.post('/', PostController.addpost)

router.get('/', PostController.getPosts)

router.get('/:id', PostController.getAPost)

router.put('/:id', PostController.updatePost)

router.delete('/:id', PostController.deletePost)