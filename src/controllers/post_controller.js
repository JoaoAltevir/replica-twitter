import Post from "../models/post_model.js"

const store = async (req, res) => {
    try {
        const user = await Post.create({
            text: req.body.text,
            user: req.user
        })
        res.status(201).json()
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