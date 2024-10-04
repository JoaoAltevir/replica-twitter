import User from "../models/user_model.js";
import jwtServices from "../services/jwt_services.js";

const store = async (req,res) => {
    try {
        await User.create(req.body);
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
}

const index = async (req, res) => {
    try {
        const content = await User.find().exec();
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

const show = async (req,res) => {
    try {
        const content = await User.findById(req.params.id).exec();
        res.json(content); 
    } catch (error) {
        res.status(400).json(error);
    }
}

const update = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json();    
    } catch (error) {
        res.status(400).json(error);
    }
}

const destroy = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id).exec();
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
}

///////////////


const signup = async (req,res) => {
    try {
        const user = await User.create({
            email: req.body.email,
            password: req.body.password,
            nickname: req.body.nickname
        });
        const token = jwtServices.generateAccessToken(user)

        res.status(201).json(token)
    } catch (err) {
        console.log(err)
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
    signup,
    index,
    destroy,
    store,
    show,
    update
}