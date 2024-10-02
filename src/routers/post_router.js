import {Router} from "express";
import post_controller from "../controllers/post_controller.js"
import jwtAuth from "../middlewares/jwt_auth.js"
const router = Router();

router.get("/", post_controller.index)
router.get("/:id",post_controller.show ) 
router.use(jwtAuth)
router.post("/", post_controller.store)
router.put("/:id", post_controller.update) 
router.delete("/:id", post_controller.destroy)

export default router
