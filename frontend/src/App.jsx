
import './App.css'
import React, { useState, useEffect } from 'react'

import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import { fetchBooks } from './store/BookSlice';
import { bookActions } from './store/BookSlice';


function App() {

  const [tasks, setTasks] = useState([])
  // const [isLoading, setIsLoading] = useState(false)


  const dispatch = useDispatch();
  const products = useSelector(state => state.book.books);

  // console.log(products.books);
  useEffect(() => {

    dispatch(fetchBooks())
    // console.log(products);


}, [])


  // const getTasks = async () => {
  //   setIsLoading(true)

  //   try {

  //     const {data} = await axios.get("http://localhost:3000/api/books")
  //     console.log(data);
  //     setTasks(data);
  //     setIsLoading(false)



  //   } catch (error) {

  //     console.log(error);
  //     setIsLoading(false)

  //   }
  // }

  // useEffect(() => {
  //   getTasks();
  // }, [])

  return (
    <div className="App">
      {/* Hiiiiiiiiiiiii */}
  
 
          <>
         
          {products.length > 0 &&   products.map((product, index) => {
              return <div key={index}>
                <li>{product.bookName}</li>
                <img src={product.image}/>
              </div>
            }) }

           
          </>
    
    </div>
  )
}

export default App
