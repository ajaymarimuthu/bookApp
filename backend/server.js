const express = require("express");
// const cors=require("cors")
 
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const Book = require("./model/bookModel");
 


const PORT = process.env.PORT;

const app = express();


//middlewares

// const logger = (req,res,next)=>{
//     console.log("MIddlearew");
//     console.log(req.method);
//     next()
// }

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
// app.use(cors())

// app.use("/api/tasks",taskRoutes);


// ---------- -------------
// ROUTES--- 

app.get("/",(req,res)=>{
    res.send("Home ... page");
})
app.post("/api/books", async(req,res)=>{

    try {

        const book=await Book.create(req.body)

        res.status(200).json(book)
       
        
    } catch (error) {
      res.status(500).json({msg:error.message})
    }
    // console.log(req.body);
    // res.send("book created");
})
 
 
 

// "mongodb+srv://ajayindia8001:Ajvennila01@cluster0.dzyr5bk.mongodb.net/BooksApp?retryWrites=true&w=majority"
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 3000")
  )
  .catch((err) => console.log(err));





 
