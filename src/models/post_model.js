import {Schema, model} from "mongoose";

const postSchema = new Schema ({
    text: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true
}
)

const Post = model("Post", postSchema);

export default Post