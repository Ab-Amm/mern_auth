
import "dotenv/config";
import mongoose from "mongoose"
import { MONGO_URI } from "../constants/env";

const connectToDatabase = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("connected successfully 2 DB")
    } catch (error) {
        console.error("couldn't connect", error);
        process.exit(1);
    }
}

export default connectToDatabase;