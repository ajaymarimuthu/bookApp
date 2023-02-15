const express = require("express");
// const cors=require("cors")
 
// const dotenv = require("dotenv").config();
// const mongoose = require("mongoose");
// const Task = require("./models/taskModel");
// const taskRoutes=require("./routes/taskRoute");



const PORT = process.env.PORT || 3000;

const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cors())

// app.use("/api/tasks",taskRoutes);


app.get("/",(req,res)=>{
    res.send("Home ... page");
})
app.post("/",(req,res)=>{
    res.send("Post ... page");
})
 
app.listen(PORT, () => {
        console.log("in server", PORT);
});

// mongoose
//   .connect(
//     "mongodb+srv://ajayindia8001:Ajvennila01@cluster0.jtxheil.mongodb.net/mernTaskApp?retryWrites=true&w=majority"
//   )
//   .then(() => app.listen(PORT))
//   .then(() =>
//     console.log("Connected TO Database and Listening TO Localhost 3000")
//   )
//   .catch((err) => console.log(err));





 
