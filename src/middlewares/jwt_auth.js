import jwt_services from "../services/jwt_services.js";

const jwtAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if(jwt_services.verifyAccessToken(token)){
            next()
        }else{
            throw new Error("");
        }
        
    } catch (error) {
        res.sendStatus(401)
    }
}

export default jwtAuth