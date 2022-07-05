import { Router } from "express";
import * as userController from "../controllers/userControllers.js";
import * as userMiddleware from "../middlewares/userMiddleware.js"

const userRouter = Router();

userRouter.post("/sign-up", userMiddleware.findUser,userController.createUser)
userRouter.post("/sign-in")

export default userRouter;