import {Router} from "express";
import post_controller from "../controllers/post_controller.js"
import jwtAuth from "../middlewares/jwt_auth.js"
const router = Router();


// ROTAS PUBLICAS

//ROTAS PRIVADAS
router.use(jwtAuth)
router.get("/", post_controller.index)
router.get("/:id",post_controller.show ) 
router.post("/", post_controller.store)
router.put("/:id", post_controller.update) 
router.delete("/:id", post_controller.destroy)

export default router
