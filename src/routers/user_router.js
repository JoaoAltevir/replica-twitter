import {Router} from "express";
import userController from "../controllers/user_controller.js"
import followUnfollow from "../controllers/following_controller.js"
import authenticator from "../middlewares/jwt_auth.js"
import authorizer from "../middlewares/authorizer.js";

const router = Router()

//ROTAS PUBLICAS
router.post("/signup", userController.signup);
router.post("/login", userController.login);

//ROTAS PRIVADAS
//apenas autenticado 
router.use(authenticator);
router.put("/follow/:id", followUnfollow);
//autenticado e autorizado
router.use(authorizer("ADM"));
router.post("/", userController.store)
router.get("/", userController.index);
router.get("/:id", userController.show)
router.put("/:id", userController.update)
router.delete("/:id", userController.destroy);

export default router