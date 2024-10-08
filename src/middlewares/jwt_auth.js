import jwtServices from "../services/jwt_services.js"
import User from "../models/user_model.js";


const jwtAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const user = jwtServices.verifyAccessToken(token)
        if (user) {
            req.user = await User.findById(user._id);
            next()
        }else{
            throw new Error("Usuario não encontrado!");
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(401)
    }
}

export default jwtAuth