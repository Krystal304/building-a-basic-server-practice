//import
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./db/conn.mjs";
import songRoutes from './routes/songsRoutes.mjs'

//setup
const app = express();

dotenv.config();

let PORT = process.env.PORT || 3001;
//db collection

connectDB()

//middlware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

//routes

app.use('/song', songRoutes)

//listener

app.listen(PORT, () => {
  console.log(`server is on PORT: ${PORT}`);
});
