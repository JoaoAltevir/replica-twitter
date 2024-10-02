import Post from "../models/post_model.js"

const store = async (req, res) => {
    try {
        const user = await Post.create({
            text: req.body.text,
            user: req.user
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json()
    }
}

const index = async (req,res) => {
    try {
        const content = await Post.find(req.query).exec();
        res.json(content)
    } catch (error) {
        console.log(error)
        res.status(400);json()
    }
}

const show = async (req, res) => {
    try {
        const content = await Post.findById(req.params.id).exec();
        res.json(content)
    } catch (error) {
        console.log(error)
        res.status(400).json();
    }
}

const update = async(req, res) => {
    try {
        const user = req.user._id

        await Post.findOneAndUpdate({
        _id: req.params.id,
        user
    }).exec()
    } catch (error) {
        console.log(error)
        res.status(400).json();       
    }
}

const destroy = async (req, res) => {
    try {
        const user = req.user._id

        await Post.findOneAndDelete({
            _id: req.params.id,
            user
        }).exec();
    } catch (error) {
        res.status(401).json();
    }
}

export default {
    store,
    index,
    show,
    update,
    destroy
}