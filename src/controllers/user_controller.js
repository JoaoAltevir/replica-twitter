import User from "../models/user_model.js";
import jwtServices from "../services/jwt_services.js"


const signup = async (req,res) => {
    try {
        const user = await User.create({
            email: req.body.email,
            password: req.body.password,
            nickname: req.body.nickname,
        })

        const token = jwtServices.generateAccessToken(user)

        res.status(201).json(token)
    } catch (err) {
        res.status(400).json()
    }
}

const login = async (req,res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        }).exec();

        if(user && (await user.isValidPassword(req.body.password))){
            const token = jwtServices.generateAccessToken(user);
            res.json(token);
        }else{
            res.status(400).json({
                error: "Email or password incorrect"
            })
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

export default {
    login,
    signup
}