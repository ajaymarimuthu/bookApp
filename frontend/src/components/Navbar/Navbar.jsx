import React from 'react'
import { MDBCol, MDBIcon } from "mdbreact";
import LineTo from 'react-lineto'
import "./Navbar.css"
function Navbar() {
    return (

        <>

            <div className='nav'>


                <div className='nav-items'>
                    <p>Book  <MDBIcon icon="caret-down" /> </p>
                    <p>New Arrivals  </p>
                    <p>Box Sets</p>
                    <p>Best Selleres</p>
                    <p>Fiction Books</p>
                    <p>Award Winners</p>
                    <p>Requeste a Book</p>
                </div>


                <div className='cart'>
                    <MDBIcon icon="shopping-cart" id="shopping-cart" />
                    <MDBIcon fab icon="android" id="android" />


                </div>

            </div>
 
            <div
                style={{
                    background: 'red',
                    height: '1px',
                    margin: '0.2rem 0'
                }}
            />


        </>


    )
}
export default Navbar;