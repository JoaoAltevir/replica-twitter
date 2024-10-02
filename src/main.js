import "dotenv/config"
import e from "express"
import userRouter from "./routers/user_router.js"
import postRouter from "./routers/post_router.js"
const app = e()

app.use(e.json());

app.use("/user", userRouter);
app.use("/post", postRouter);

app.listen(process.env.API_PORT, () => {
    console.log(`listening on port ${process.env.API_PORT}`)
})