import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


const Books_URL="http://localhost:3000/api/books"

const initialBookState={
    books:[]
}

export const fetchBooks=createAsyncThunk('/books/fetchBooks', async()=>{
    const response=await axios.get(Books_URL);

    // console.log(response.data);

    return response.data;
}) 

const bookSlice=createSlice({
    name:'bookItems',
    initialState:initialBookState,

    extraReducers: (builder) =>{
        builder.addCase(fetchBooks.pending, (state)=>{
            state.loading=true
        })

        builder.addCase(fetchBooks.fulfilled, (state,action)=>{
            state.books=action.payload
        })

        builder.addCase(fetchBooks.rejected, (state,action)=>{
            state.loading=false
            state.books=[]
            state.error=action.error.message
        })


    }
})

export default bookSlice.reducer;
export const bookActions=bookSlice.actions;