
import './App.css'
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import { fetchBooks } from './store/BookSlice';
import { bookActions } from './store/BookSlice';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ImageComponent from './components/ImageComponent/ImageComponent';
import Carousel from "./components/Carousel/Carousel"
import BookSection from './components/BookSection/BookSection';

function App() {

  const [books, setBooks] = useState([])
  // const [isLoading, setIsLoading] = useState(false)


  const dispatch = useDispatch();
  const products = useSelector(state => state.book.books);

  // console.log(products.books);
  useEffect(() => {

    dispatch(fetchBooks())
    // console.log(products);


}, [])


 
  return (
    <div className="App">

      <Header/>
      <Navbar/>
      <ImageComponent/>
      <Carousel/>
      <BookSection/>
     
  
 
          {/* <>
         
          {products.length > 0 &&   products.map((product, index) => {
              return <div key={index}>
                <li>{product.bookName}</li>
                <img src={product.image}/>
              </div>
            }) }

           
          </> */}
    
    </div>
  )
}

export default App
