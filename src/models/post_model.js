import {Schema, model} from "mongoose";

const postSchema = new Schema ({
    text: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true
    }
})

const Post = model("Post", postSchema);