import {Router} from "express";
import userController from "../controllers/user_controller.js"

const router = Router()

router.post("/signup", userController.signup);
router.post("/login", userController.login);


export default router