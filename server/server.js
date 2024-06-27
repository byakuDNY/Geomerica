import express from "express";
import dotenv from "dotenv";

import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import countryRoutes from "./routes/country.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(cors());
app.use(express.json()); // para analizar las solicitudes entrantes con cargas json (from req.body)
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", authRoutes);
app.use("/api/country", countryRoutes);

/*
app.get("/", (req, res) => {
    //root route http://localhost:5000/
    res.send("Hola Mundo")
});
*/

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
