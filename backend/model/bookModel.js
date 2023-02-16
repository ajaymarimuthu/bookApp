const mongoose=require("mongoose");

 const bookSchema=mongoose.Schema(
    {

        bookName:{
            type: String,
            required:[true, "Please add book name"]

        },
        authorName:{
            type:String,
            required:[true, "Please add author name"]
        },
        price:{
            type:Number,
            required:true
        }
        // image:{
        //     type:
        // }

    },
    {
        timestamps: true
    }
    
)

const Book=mongoose.model("Book",bookSchema)

module.exports = Book