import mongoose from "mongoose";
import { config } from "dotenv";
config()
const connectDB = () => {
     mongoose.connect(process.env.MONGODB_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true
     }).then(() => {
          console.log(`Mongodb connected successfully ${mongoose.connection.host}/${mongoose.connection.port}`);
     }).catch((error) => {
          console.log("connection faild");
          console.log(error);
     })
}

export default connectDB;