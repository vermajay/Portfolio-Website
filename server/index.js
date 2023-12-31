const express = require("express");
const app = express();

const reachRoutes = require("./routes/Reach")

const cors = require("cors");  //so the backend(4000) can entertain the requests made by frontend(3000) on the same local machine

const dotenv = require("dotenv");

const PORT = process.env.PORT || 4000;
dotenv.config();

//middlewares
app.use(express.json());

app.use(cors(
    {
        origin: "*",
        credentials: true
    }
))

app.use("/api/v1/reach", reachRoutes);

//default route
app.get("/", (req,res)=>{
    return res.status(200).json(
        {
            success: true,
            message: "Your server is up and running...."
        }
    )
})

//make the app live on port
app.listen(PORT, ()=>{
    console.log(`App is running at port ${PORT}`);
})