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
        },
        award:{
            type:String,
            required:true
        },
        // image:{
        //     data:Buffer,
        //     contentType:String

        // }
        image:{
            type:String,
            required:true

        }

    },
    {
        timestamps: true
    }
    
)

const Book=mongoose.model("Book",bookSchema)

module.exports = Book