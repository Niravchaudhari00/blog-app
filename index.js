import express from "express";
import { config } from "dotenv";
import connectDB from "./config/database.js";
import blogRoutes from "./routes/blogRoutes.js";
config();

const app = express();
const PORT = process.env.PORT;

// middelware
app.use(express.json());
// default route

app.get("/", (req, res) => {
  res.send("<h1>welcome world</h1>");
});

//post routes
app.use("/api/v1", blogRoutes);

// crate a server
app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`);
});

// mongodb connection
connectDB();
