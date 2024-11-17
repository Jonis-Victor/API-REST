import express from "express";
import { db } from "../configs/db.config";
import { postRouter } from "../routes/postRoute";
import { userRouter } from "../routes/userRoute";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1/users', userRouter);
app.use('/api/v1/posts', postRouter);
app.get('/', (req, res) => {
  res.json({ message: "Oi express!" })
})
db.then(() => {
  app.listen(3000, () => console.log('Server is running on port 3000'));
})