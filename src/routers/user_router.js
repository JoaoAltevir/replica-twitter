import {Router} from "express";
import userController from "../controllers/user_controller.js"
import authenticator from "../middlewares/jwt_auth.js"
import authorizer from "../middlewares/authorizer.js";

const router = Router()

router.post("/signup", userController.signup);
router.post("/login", userController.login);

router.use(authenticator);
router.use(authorizer);
router.get("/", userController.index);
router.delete("/:id", userController.destroy);

export default router