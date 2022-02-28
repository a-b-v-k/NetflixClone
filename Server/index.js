const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieroute = require("./routes/movies");
const listroute = require("./routes/lists");

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require('mongoose');

main().then(()=>console.log("connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieroute);
app.use("/api/lists", listroute);

app.listen(8800, ()=>{
    console.log("Backend server is running.");
})