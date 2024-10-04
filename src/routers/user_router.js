import {Router} from "express";
import {
    login,
    signup,
    store,
    index,
    show,
    update,
    destroy
} from "../controllers/user_controller.js"
import { followUnfollow } from "../controllers/following_controller.js"
import authenticator from "../middlewares/jwt_auth.js"
import authorizer from "../middlewares/authorizer.js";

const router = Router()

//ROTAS PUBLICAS
router.post("/signup", signup);
router.post("/login", login);

//ROTAS PRIVADAS
//apenas autenticado 
router.use(authenticator);
router.put("/follow/:id", followUnfollow);
//autenticado e autorizado
router.use(authorizer("ADM"));
router.post("/", store)
router.get("/", index);
router.get("/:id", show)
router.put("/:id", update)
router.delete("/:id", destroy);

export default router