import jwtServices from "../services/jwt_services.js"

const jwtAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const user = jwtServices.verifyAccessToken(token)
        if (user) {
            req.user = user
            next()
        }
        throw new Error();
    } catch (error) {
        res.sendStatus(401)
    }
}

export default jwtAuth