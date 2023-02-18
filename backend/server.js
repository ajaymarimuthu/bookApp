const express = require("express");
const cors=require("cors")
 
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const Book = require("./model/bookModel");
 const multer=require("multer");


const PORT = process.env.PORT;

const app = express();


//middlewares
 
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors())
 

 
 

// "mongodb+srv://ajayindia8001:Ajvennila01@cluster0.dzyr5bk.mongodb.net/BooksApp?retryWrites=true&w=majority"
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 3000")
  )
  .catch((err) => console.log(err));


  // storage 

  const Storage=multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb) =>{
           cb(null, file.originalname);
    }
  })


  const upload =multer({
    storage:Storage
  }).single('testImage')



 
// ---------- -------------
// ROUTES--- 

app.get("/api/books",async(req,res)=>{

  try {
    const books=await Book.find();
    res.status(200).json(books);
  } catch (error) {

    res.status(500).json({ msg: error.message });
    
  }


 
})


// app.post("/api/books", (req,res)=>{

//   upload(req,res, (err) =>{
//     if(err){
//       console.log(err);
//     }
//     else{

     

//         const book= new Book({
//           bookName:req.body.bookName,
//           authorName:req.body.authorName,
//           price:req.body.price,
//           award:req.body.award,
//           image:{
//             data:req.file.filename,
//             contentType:'image/png'
//           }
//         })     
//         book.save();
//     }
    

//   })
 

// })




// app.post("/api/books", (req,res)=>{

//   upload(req,res, (err) =>{
//     if(err){
//       console.log(err);
//     }
//     else{

//       try {

//         const book= Book.create(req.body)
  
//         res.status(200).json(book)
       
        
//     } catch (error) {
//       res.status(500).json({msg:error.message})
//     }

//     }
//   } )


// })


app.post("/api/books", async(req,res)=>{
  try {
    const newBook= req.body;

    const book=new Book(newBook);
    await book.save();
  
      res.status(200).json(book)
  } catch (error) {
    res.status(500).json({msg:error.message})
  }
})