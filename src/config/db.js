import "dotenv/config"
import mongoose from "mongoose";

const main = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB} + ${process.env.DATABASE}`);
    console.log("connected with DB");
  } catch (error) {
    console.log(error);
  }
}

main()

export default mongoose